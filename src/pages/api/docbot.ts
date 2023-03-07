import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI } from 'langchain/llms'
import { ChatVectorDBQAChain } from 'langchain/chains'
import { HNSWLib } from 'langchain/vectorstores'
import { OpenAIEmbeddings } from 'langchain/embeddings'

const WCPayDocsStore = path.resolve('./public', `vectorstores/wcpay-docs`)

function getTernaryString(value: boolean | undefined) {
  if (value === undefined) {
    return 'unknown'
  }
  return value ? 'yes' : 'no'
}

function getLanguageFromLocale(locale: string) {
  const formattedLocale = locale.substring(0, 2).toLowerCase()
  try {
    return new Intl.Locale(formattedLocale).language
  } catch (e) {
    return 'unknown'
  }
}

function getDepositsScheduleString(
  depositsState: WCPayQARequestProps['deposits']
) {
  if (depositsState?.interval === 'weekly') {
    return `weekly on ${depositsState?.weekly_anchor}`
  }
  if (depositsState?.interval === 'monthly') {
    if (depositsState?.monthly_anchor === 31) {
      return 'monthly on the last day of month'
    }
    return `monthly on day of month ${
      depositsState?.monthly_anchor || 'unknown'
    }`
  }
  return depositsState?.interval || 'unknown'
}

async function generateAnswer({
  question,
  store = WCPayDocsStore,
  locale,
  country,
  deposits,
  has_active_loan,
  has_previous_loans,
  isLive,
  supportedCurrencies,
  instantDepositsEligible,
  hasOverdueRequirements,
  hasPendingRequirements,
  currency,
  depositDestination,
}: WCPayQARequestProps): Promise<WCPayQAResponseProps> {
  /* Initialize the LLM to use to answer the question */
  const model = new OpenAI({
    modelName: 'gpt-3.5-turbo',
    temperature: 0.3, // Low temperature results in less creativity, more factual
  })

  /* Load the vectorstore */
  const vectorStore = await HNSWLib.load(store, new OpenAIEmbeddings())

  /* Create the chain */
  const chain = ChatVectorDBQAChain.fromLLM(model, vectorStore)
  chain.returnSourceDocuments = true

  /* Ask it a question */
  const questionWithContext = `
  You are a helpful WooCommerce Payments support AI who will answer questions for merchants.
  Translate your response into the account's language.
  Today is ${new Date().toLocaleDateString(locale)}.
  Your first merchant has a woocommerce payments account with the following attributes that you already know about:
  Account country: ${country || 'unknown'}.
  Account language: ${locale ? getLanguageFromLocale(locale) : 'unknown'}.
  Account currency: ${currency || 'unknown'}.
  Currencies accepted by this account: ${
    supportedCurrencies?.join(', ') || 'unknown'
  }.
  Account is a live account (not a test account): ${getTernaryString(isLive)}.
  Account has an active Capital loan: ${getTernaryString(has_active_loan)}.
  Account has had previous Capital loans: ${getTernaryString(
    has_previous_loans
  )}.
  Account has overdue requirements: ${getTernaryString(hasOverdueRequirements)}.
  Account has pending requirements: ${getTernaryString(hasPendingRequirements)}.
  Account has completed the new account waiting period: ${getTernaryString(
    deposits?.completed_waiting_period
  )}.
  Deposits schedule (when the available balance deposit will be dispatched to the merchant's bank): ${getDepositsScheduleString(
    deposits
  )}.
  Deposits pending period (the number of days incoming transactions will be held before being included in the available balance): ${
    deposits?.delay_days || 'unknown'
  } days.
  ${instantDepositsEligible ? 'Account is eligible for instant deposits.' : ''}
  Account deposits received via bank account or debit card: ${
    depositDestination || 'unknown'
  }.

  Their question is: ${question}
  `.replace(/\n\s+/g, ' ')

  const modelResponse = await chain.call({
    question: questionWithContext,
    chat_history: [],
  })

  type SourceDocument = {
    pageContent: string
    metadata: {
      url: string
    }
  }

  // Reduce the source documents to an array of unique URLs.
  const sources: string[] = modelResponse.sourceDocuments.reduce(
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
    answer: modelResponse.text.trim(),
    sources,
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body: WCPayQARequestProps = req.body

  const answer = await generateAnswer({
    ...body,
  })

  res.status(200).json({ ...answer })
}
