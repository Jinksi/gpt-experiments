import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI } from 'langchain/llms'
import { VectorDBQAChain } from 'langchain/chains'
import { HNSWLib } from 'langchain/vectorstores'
import { OpenAIEmbeddings } from 'langchain/embeddings'
import { DynamicTool, Calculator, ChainTool } from 'langchain/tools'

import { initializeAgentExecutor } from 'langchain/agents'

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
}: WCPayQARequestProps) {
  // Prepare the prompt
  const systemMessage = `
  You are a friendly WooCommerce Payments support engineer who will answer questions for merchants.
  Translate your response into the account's language.
  Don't make any assumptions about the merchant's account.
  Tailor your answer to the merchant's account details.
  If you don't know the answer, just say that you don't know, don't try to make up an answer.

  Some initial information about the merchant's account:
  Account country code: ${country || 'unknown'}.
  Account language: ${locale ? getLanguageFromLocale(locale) : 'unknown'}.
  Account currency: ${currency || 'unknown'}.
  Currencies accepted by this account: ${
    supportedCurrencies?.join(', ') || 'unknown'
  }.
  Account is a live account (not a test account): ${getTernaryString(isLive)}.

  This merchant asks you:
  `.replace(/\n\s+/g, ' ')

  // Initialize the LLM to use to answer the question
  const model = new OpenAI({
    modelName: 'gpt-3.5-turbo',
    temperature: 0.5, // Low temperature results in less creativity, more factual
    // prefixMessages: [{ role: 'system', content: systemMessage }],
    cache: false,
  })

  // Load the vectorstore
  const vectorStore = await HNSWLib.load(store, new OpenAIEmbeddings())

  // Create the chain
  const chain = VectorDBQAChain.fromLLM(model, vectorStore)
  // chain.returnSourceDocuments = true

  const qaTool = new ChainTool({
    name: 'wcpay-docs-qa',
    description:
      'WooCommerce Payments QA - useful for when you need to ask questions about WooCommerce Payments.',
    chain,
    // returnDirect: true,
  })

  const dateTool = new DynamicTool({
    name: 'date',
    description:
      'call this to get the current date. input should be an empty string.',
    func: async () => {
      return new Date().toDateString()
    },
  })

  const accountDetailsTool = new DynamicTool({
    name: 'wcpay-account-details',
    description: `call this to get details about the merchant's WooCommerce Payments account. input should be one of 'deposits', 'capital', 'onboarding'.
      'deposits' will return details about the account's deposits.
      'capital' will return details about the account's Stripe capital loans.
      'onboarding' will return details about the account's KYC onboarding status.
      `,
    func: async (detailCategory: string) => {
      let response = ``

      if (detailCategory.includes('deposits')) {
        response += `
        Has the account completed the 7 day new account waiting period for deposits: ${getTernaryString(
          deposits?.completed_waiting_period
        )}.
        Account has the following deposit schedule set (when the available balance deposit will be dispatched to the merchant's bank): ${getDepositsScheduleString(
          deposits
        )}.
        Account has the following deposit pending period (the number of days payments received will be held before being included in the available balance): ${
          deposits?.delay_days || 'unknown'
        } days.
        ${
          instantDepositsEligible
            ? 'Account is eligible for instant deposits.'
            : ''
        }
        Account deposits received via bank account or debit card: ${
          depositDestination || 'unknown'
        }.
        `
      }
      if (detailCategory.includes('capital')) {
        response += `
        Account has an active Capital loan: ${getTernaryString(
          has_active_loan
        )}.
        Account has had previous Capital loans: ${getTernaryString(
          has_previous_loans
        )}.
        `
      }
      if (detailCategory === 'onboarding') {
        response += `
        Account has overdue requirements: ${getTernaryString(
          hasOverdueRequirements
        )}.
        Account has pending requirements: ${getTernaryString(
          hasPendingRequirements
        )}.
        `
      }

      return response.replace(/\n\s+/g, ' ')
    },
  })

  const tools = [
    // new Calculator(),
    qaTool,
    dateTool,
    accountDetailsTool,
  ]

  const executor = await initializeAgentExecutor(
    tools,
    model,
    'zero-shot-react-description'
  )
  console.log('Loaded agent.')

  const input = systemMessage + `\n` + question

  console.log(`Executing with input "${input}"...`)

  const result = await executor.call({ input })

  console.log(result)

  // // Ask it a question
  // console.log(question)
  // const start = Date.now()
  // const modelResponse = await chain.call({
  //   question: systemMessage + `\n` + question,
  //   chat_history: [],
  // })
  // const end = Date.now()
  // const answerDuration = end - start
  // console.log(`Answered in ${answerDuration}ms`)

  // // Reduce the source documents to an array of unique URLs.
  // const sources: string[] = modelResponse.sourceDocuments.reduce(
  //   (acc: string[], sourceDocument: SourceDocument) => {
  //     const {
  //       metadata: { url },
  //     } = sourceDocument
  //     if (acc.includes(url)) return acc
  //     return [...acc, url]
  //   },
  //   []
  // )

  return {
    answer: result.output.trim(),
    sources: [],
    answerDuration: 0,
    ...result,
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
