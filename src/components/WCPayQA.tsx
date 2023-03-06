import { useState } from 'react'

const exampleQuestions = [
  `How long does it take to get paid?`,
  `When will I receive my first deposit?`,
  `Am I eligible for instant deposits?`,
  `What is the difference between an instant deposit and a standard deposit?`,
  `I'm still waiting on my payout. What's going on?`,
  `What is the minimum payout amount?`,
]

async function fetchQuestionAnswer(props: WCPayQARequestProps) {
  const response = await fetch(`/api/docbot`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(props),
  })
  if (!response.ok) {
    const error = (await response.json()) as { message: string }
    throw new Error(error.message)
  }
  return (await response.json()) as WCPayQAResponseProps
}

export function WCPayQAForm() {
  const [output, setOutput] = useState<string>('')
  const [sources, setSources] = useState<string[]>([])
  const [error, setError] = useState<string | undefined>()
  const [loadingState, setLoadingState] = useState<'loading' | 'idle'>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(undefined)
    setOutput('')
    setSources([])
    setLoadingState('loading')

    const data = new FormData(event.currentTarget)
    const question = data.get('question')?.toString() || ''
    const country = data.get('country')?.toString() || ''
    const currency = data.get('currency')?.toString() || ''
    const completed_waiting_period = !!data.get('completed_waiting_period')
    const depositDestination: string | undefined =
      data.get('depositDestination')?.toString() || ''

    try {
      const response = await fetchQuestionAnswer({
        question,
        country,
        currency,
        depositDestination,
        deposits: {
          completed_waiting_period,
        },
      })

      setOutput(response.answer)
      setSources(response.sources)
    } catch (error) {
      console.error(error)
      setError(error?.toString())
    }

    setLoadingState('idle')
  }
  return (
    <div>
      <h2>Personalised WCPay QA Bot</h2>
      <form onSubmit={handleSubmit}>
        <fieldset disabled={loadingState === 'loading'}>
          <legend>Account details</legend>
          <label htmlFor="country">Country</label>
          <input type="text" name="country" defaultValue="AU" />

          <label htmlFor="currency">Currency</label>
          <input type="text" name="currency" defaultValue="AUD" />

          <p>
            <label htmlFor="completed_waiting_period">
              Completed new account waiting period?{' '}
              <input
                type="checkbox"
                name="completed_waiting_period"
                defaultChecked
              />
            </label>
          </p>

          <label htmlFor="depositDestination">Deposit destination</label>
          <select name="depositDestination">
            <option value="">Select the accounts deposit destination</option>
            <option value="Bank account">Bank account</option>
            <option value="Debit card">Debit card</option>
          </select>
        </fieldset>

        <label htmlFor="question">Question</label>
        <input
          type="text"
          name="question"
          defaultValue={exampleQuestions[0]}
          placeholder={
            exampleQuestions[
              Math.floor(Math.random() * exampleQuestions.length)
            ]
          }
        />

        <button type="submit" disabled={loadingState === 'loading'}>
          Ask
        </button>
      </form>

      <hr />

      <h3>Answer</h3>
      <textarea
        name="output"
        value={output}
        readOnly
        style={{
          minHeight: '20rem',
        }}
      />
      {sources.length > 0 && (
        <div>
          <h3>Sources</h3>
          {sources.map((source) => (
            <div key={source}>{source}</div>
          ))}
        </div>
      )}

      {error && (
        <p
          style={{
            color: 'white',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            padding: '1rem',
          }}
        >
          {error}
        </p>
      )}
    </div>
  )
}
