import type { NextApiRequest, NextApiResponse } from 'next'

import { OpenAI } from 'langchain/llms'
import { ChatVectorDBQAChain } from 'langchain/chains'
import { HNSWLib } from 'langchain/vectorstores'
import { OpenAIEmbeddings } from 'langchain/embeddings'

const WCPayDocsStore = `public/vectorstores/wcpay-docs`

async function fetchWCPayQA({
  question,
  store = WCPayDocsStore,
  country,
  withinNewAccountPeriod,
  currency,
  depositDestination,
}: WCPayQARequestProps): Promise<WCPayQAResponseProps> {
  /* Initialize the LLM to use to answer the question */
  const model = new OpenAI({
    modelName: 'gpt-3.5-turbo',
    temperature: 0.5,
  })

  /* Load the vectorstore */
  const vectorStore = await HNSWLib.load(store, new OpenAIEmbeddings())

  /* Create the chain */
  const chain = ChatVectorDBQAChain.fromLLM(model, vectorStore)
  chain.returnSourceDocuments = true

  /* Ask it a question */
  const questionWithContext = `
  Act as a friendly WooCommerce Payments expert support agent who answer questions for merchants.
  Format your answer with multiple newline characters where appropriate.
  Your first merchant has a woocommerce payments account with the following attributes:
  Account country: ${country || 'unknown'}.
  Account within the new merchant account period: ${
    withinNewAccountPeriod === undefined
      ? 'unknown'
      : withinNewAccountPeriod
      ? 'yes'
      : 'no'
  }.
  Account currency: ${currency || 'unknown'}.
  Account deposits received via bank account or debit card: ${
    depositDestination || 'unknown'
  }.

  Their question is: ${question}
  `

  const res = await chain.call({
    question: questionWithContext,
    chat_history: [],
  })

  type SourceDocument = {
    pageContent: string
    metadata: {
      url: string
    }
  }

  const sources: string[] = res.sourceDocuments.reduce(
    (acc: string[], sourceDocument: SourceDocument) => {
      const {
        metadata: { url },
      } = sourceDocument
      if (acc.includes(url)) return acc
      return [...acc, url]
    },
    []
  )

  return {
    answer: res.text.trim(),
    sources,
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body: WCPayQARequestProps = req.body

  console.log(body)

  const answer = await fetchWCPayQA({
    ...body,
  })

  res.status(200).json({ ...answer })
}
