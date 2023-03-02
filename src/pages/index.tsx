import Head from 'next/head'
import { useState } from 'react'

async function fetchProductDescription({
  title,
  description,
  tone,
  targetAudience,
}: ProductDescriptionRequest) {
  const response = await fetch(`/api/product-description`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description, tone, targetAudience }),
  })
  if (!response.ok) {
    const error = (await response.json()) as { message: string }
    throw new Error(error.message)
  }
  return (await response.json()) as ProductDescriptionResponse
}

export default function Home() {
  const [output, setOutput] = useState<string>('')
  const [error, setError] = useState<string | undefined>()
  const [loadingState, setLoadingState] = useState<'loading' | 'idle'>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(undefined)
    setOutput('')
    setLoadingState('loading')

    const data = new FormData(event.currentTarget)
    const title = data.get('title')?.toString() || ''
    const description = data.get('description')?.toString() || ''
    const tone = data.get('tone')?.toString() || ''
    const targetAudience = data.get('targetAudience')?.toString() || ''

    try {
      const response = await fetchProductDescription({
        title,
        description,
        tone,
        targetAudience,
      })
      setOutput(response.description)
    } catch (error) {
      console.error(error)
      setError(error?.toString())
    }

    setLoadingState('idle')
  }
  return (
    <>
      <Head>
        <title>✨ Product Describer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Product Title</label>
          <input
            type="text"
            name="title"
            defaultValue="Fluffy Rainbow Unicorn Socks"
          />

          <label htmlFor="description">Product attributes</label>
          <textarea
            name="description"
            defaultValue={`colorful\ncomfortable\nwarm\nfuzzy\nmagical\n`}
          />

          <label htmlFor="tone">
            Desired tone{' '}
            <em>
              (e.g luxury, philosophical, professional, exclusive or silly and
              humorous)
            </em>
          </label>
          <input
            type="text"
            name="tone"
            defaultValue="Friendly and conversational"
          />

          <label htmlFor="targetAudience">
            Target Audience{' '}
            <em>(e.g. fathers, children, doctors or company executives)</em>
          </label>
          <input
            type="text"
            name="targetAudience"
            defaultValue="A general audience"
          />

          <button type="submit" disabled={loadingState === 'loading'}>
            Generate
          </button>
        </form>

        <label htmlFor="output">Generated product description</label>
        <textarea
          name="output"
          value={output}
          readOnly
          style={{
            minHeight: '20rem',
          }}
        />

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
      </main>
    </>
  )
}
