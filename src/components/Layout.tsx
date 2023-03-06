import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>✨ LLM experiments</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="nav">
        <Link href="/">Product describer</Link>
        <Link href="/docbot">WCPay Docs QA bot</Link>
        <a href="https://github.com/Jinksi/product-describer-gpt/">
          Source on GitHub
        </a>
      </nav>

      <main
        style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {children}
      </main>
    </>
  )
}
