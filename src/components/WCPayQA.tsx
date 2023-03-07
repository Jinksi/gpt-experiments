import { useState } from 'react'
import { useRemark } from 'react-remark'

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
  const [outputMarkdown, setOutput] = useRemark()
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

    try {
      const response = await fetchQuestionAnswer({
        question: data.get('question')?.toString() || '',
        country: data.get('country')?.toString() || '',
        currency: data.get('currency')?.toString() || '',
        supportedCurrencies:
          data.get('supportedCurrencies')?.toString().split(',') || [],
        locale: data.get('locale')?.toString() || '',
        has_active_loan: !!data.get('has_active_loan'),
        has_previous_loans: !!data.get('has_previous_loans'),
        isLive: !!data.get('isLive'),
        hasOverdueRequirements: !!data.get('hasOverdueRequirements'),
        hasPendingRequirements: !!data.get('hasPendingRequirements'),
        depositDestination: data.get('depositDestination')?.toString() || '',
        instantDepositsEligible: !!data.get('instantDepositsEligible'),
        deposits: {
          completed_waiting_period: !!data.get('completed_waiting_period'),
          interval:
            (data.get('depositInterval')?.toString() as
              | 'daily'
              | 'weekly'
              | 'monthly'
              | undefined) || 'daily',
          delay_days: parseInt(data.get('delay_days')?.toString() || '', 10),
          monthly_anchor: parseInt(
            data.get('monthly_anchor')?.toString() || '',
            10
          ),
          weekly_anchor: data.get('weekly_anchor')?.toString() || '',
        },
      })

      const output =
        response.answer + `\n\nSource:  \n${response.sources.join('  \n')}`
      console.log(response)
      setOutput(output)
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
        <label htmlFor="question">Question</label>
        <input
          type="text"
          name="question"
          defaultValue={exampleQuestions[0]}
          placeholder={exampleQuestions[0]}
        />
        <button type="submit" disabled={loadingState === 'loading'}>
          Ask
        </button>

        <fieldset>
          <legend>Answer</legend>
          <div>
            {loadingState === 'loading' && <p>Thinking...</p>}
            {outputMarkdown}
          </div>
        </fieldset>

        <fieldset disabled={loadingState === 'loading'}>
          <legend>Account details</legend>
          <label htmlFor="country">Country</label>
          <input type="text" name="country" defaultValue="AU" />

          <label htmlFor="locale">
            Locale (try different locales to test i18n, e.g. ES, FR)
          </label>
          <input type="text" name="locale" defaultValue="EN" />

          <label htmlFor="currency">Currency</label>
          <input type="text" name="currency" defaultValue="AUD" />

          <label htmlFor="supportedCurrencies">
            Supported currencies (additional currencies accepted)
          </label>
          <input type="text" name="supportedCurrencies" defaultValue="" />

          <div>
            <label htmlFor="has_active_loan">
              Has active Stripe Capital loan
              <input type="checkbox" name="has_active_loan" defaultChecked />
            </label>
          </div>

          <div>
            <label htmlFor="has_previous_loans">
              Has previous Stripe Capital loans
              <input type="checkbox" name="has_previous_loans" defaultChecked />
            </label>
          </div>

          <div>
            <label htmlFor="isLive">
              Is live account
              <input type="checkbox" name="isLive" defaultChecked />
            </label>
          </div>

          <div>
            <label htmlFor="hasOverdueRequirements">
              Has overdue requirements
              <input type="checkbox" name="hasOverdueRequirements" />
            </label>
          </div>

          <div>
            <label htmlFor="hasPendingRequirements">
              Has pending requirements
              <input type="checkbox" name="hasPendingRequirements" />
            </label>
          </div>

          <div>
            <label htmlFor="completed_waiting_period">
              Completed new account waiting period?{' '}
              <input
                type="checkbox"
                name="completed_waiting_period"
                defaultChecked
              />
            </label>
          </div>

          <label htmlFor="depositDestination">Deposit destination</label>
          <select name="depositDestination" defaultValue={'Bank account'}>
            <option value="Bank account">Bank account</option>
            <option value="Debit card">Debit card</option>
          </select>

          <label htmlFor="depositInterval">Deposit interval</label>
          <select name="depositInterval" defaultValue={'weekly'}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          <label htmlFor="weekly_anchor">Deposit weekly anchor</label>
          <select name="weekly_anchor" defaultValue={'tuesday'}>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
          </select>

          <label htmlFor="monthly_anchor">Deposit monthly anchor</label>
          <select name="monthly_anchor" defaultValue={14}>
            {Array.from(Array(28).keys()).map((i) => (
              <option key={`monthly_anchor_${i}`} value={i + 1}>
                {i + 1}
              </option>
            ))}
            <option value={31}>Last day of the month</option>
          </select>

          <label htmlFor="delay_days">Delay days (pending period)</label>
          <input type="number" name="delay_days" defaultValue="2" />

          <label htmlFor="instantDepositsEligible">
            Instant deposits eligible
            <input type="checkbox" name="instantDepositsEligible" />
          </label>
        </fieldset>
      </form>

      <br />

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
