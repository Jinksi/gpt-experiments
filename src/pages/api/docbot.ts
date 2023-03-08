import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAIChat } from 'langchain/llms'
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
  // Prepare the prompt
  const systemMessage = `
  You are a friendly WooCommerce Payments support engineer who will answer questions for merchants.
  Translate your response into the account's language.
  Format your response using markdown, including markdown-compatible links to documentation relevant to your answer where appropriate.
  Don't make any assumptions about the merchant's account but tailor your answer to the account details.
  Always consider if the merchant is eligible for a feature before answering questions about it.
  Today is ${new Date().toDateString()}.

  You're talking to a merchant and you have the following details about their WooCommerce Payments account:
  Account country code: ${country || 'unknown'}.
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
  Has the account completed the 7 day new account waiting period: ${getTernaryString(
    deposits?.completed_waiting_period
  )}.
  Account has the following deposit schedule set (when the available balance deposit will be dispatched to the merchant's bank): ${getDepositsScheduleString(
    deposits
  )}.
  Account has the following deposit pending period (the number of days payments received will be held before being included in the available balance): ${
    deposits?.delay_days || 'unknown'
  } days.
  ${instantDepositsEligible ? 'Account is eligible for instant deposits.' : ''}
  Account deposits received via bank account or debit card: ${
    depositDestination || 'unknown'
  }.

  This merchant asks you:
  `.replace(/\n\s+/g, ' ')

  // Initialize the LLM to use to answer the question
  const model = new OpenAIChat({
    modelName: 'gpt-3.5-turbo',
    temperature: 0.1, // Low temperature results in less creativity, more factual
    // prefixMessages: [{ role: 'system', content: systemMessage }],
    cache: false,
  })

  // Load the vectorstore
  const vectorStore = await HNSWLib.load(store, new OpenAIEmbeddings())

  // Create the chain
  const chain = ChatVectorDBQAChain.fromLLM(model, vectorStore)
  chain.returnSourceDocuments = true

  // Ask it a question
  const modelResponse = await chain.call({
    question: systemMessage + `\n` + question,
    chat_history: [],
  })

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
