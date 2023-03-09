import fetch from 'node-fetch'
import * as cheerio from 'cheerio'
import { HNSWLib } from 'langchain/vectorstores'
import { OpenAIEmbeddings } from 'langchain/embeddings'
import { CharacterTextSplitter } from 'langchain/text_splitter'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import Turndown from 'turndown'

// Load .env.local into process.env
dotenv.config({ path: '.env.local' })

const urls = [
  'https://woocommerce.com/document/woocommerce-payments/',
  `https://woocommerce.com/document/woocommerce-payments/compatibility/countries/`,
  'https://woocommerce.com/document/woocommerce-payments/deposits/',
  'https://woocommerce.com/document/woocommerce-payments/deposits/deposit-schedule/',
  `https://woocommerce.com/document/woocommerce-payments/deposits/instant-deposits/`,
  `https://woocommerce.com/document/woocommerce-payments/deposits/scheduled-deposit-vs-instant-deposit/`,
  `https://woocommerce.com/document/woocommerce-payments/deposits/deposit-currencies/`,
  `https://woocommerce.com/document/woocommerce-payments/deposits/change-deposit-account-info/`,
  `https://woocommerce.com/document/woocommerce-payments/deposits/change-deposit-schedule/`,
  `https://woocommerce.com/document/woocommerce-payments/deposits/why-deposits-suspended/`,
  `https://woocommerce.com/document/woocommerce-payments/deposits/deposit-schedule/`,
  `https://woocommerce.com/document/woocommerce-payments/deposits/deposits-and-payouts/`,
  `https://woocommerce.com/document/woocommerce-payments/testing-and-troubleshooting/`,
  `https://woocommerce.com/document/woocommerce-payments/taxes/`,
  `https://woocommerce.com/document/woocommerce-payments/built-in-subscriptions/`,
  `https://woocommerce.com/document/woocommerce-payments/built-in-subscriptions/subscriptions-basics/`,
  `https://woocommerce.com/document/woocommerce-payments/stripe-capital/`,
  `https://woocommerce.com/document/woocommerce-payments/stripe-capital/overview/`,
  `https://woocommerce.com/document/woocommerce-payments/stripe-capital/faq/`,
  `https://woocommerce.com/document/woocommerce-payments/payment-methods/`,
  `https://woocommerce.com/document/woocommerce-payments/payment-methods/apple-pay/`,
  `https://woocommerce.com/document/woocommerce-payments/payment-methods/google-pay/`,
  `https://woocommerce.com/document/woocommerce-payments/payment-methods/link-by-stripe/`,
  `https://woocommerce.com/document/woopay-merchant-documentation/`,
  `https://woocommerce.com/document/woocommerce-payments/our-policies/`,
  `https://woocommerce.com/document/woocommerce-payments/our-policies/reserves/`,
  `https://woocommerce.com/document/woocommerce-payments/our-policies/pci-compliance/`,
  `https://woocommerce.com/document/woocommerce-payments/our-policies/woocommerce-payments-know-your-customer/`,
  `https://woocommerce.com/document/woocommerce-payments/our-policies/connection/`,
  `https://woocommerce.com/document/woocommerce-payments/our-policies/restricted-products/`,
  `https://woocommerce.com/document/woocommerce-payments/our-policies/can-i-sell-alcohol-with-woocommerce-payments/`,
  `https://woocommerce.com/document/woocommerce-payments/our-policies/cbd/`,
  `https://woocommerce.com/document/woocommerce-payments/in-person-payments/`,
  `https://woocommerce.com/document/woocommerce-payments/fraud-and-disputes/`,
  `https://woocommerce.com/document/woocommerce-payments/fees-and-debits/`,
  `https://woocommerce.com/document/woocommerce-payments/fees-and-debits/fees/`,
  `https://woocommerce.com/document/woocommerce-payments/fees-and-debits/account-showing-negative-balance/`,
  `https://woocommerce.com/document/woocommerce-payments/customization-and-translation/`,
  `https://woocommerce.com/document/payments/faq/scheduled-deposit-vs-instant-deposit/`,
  `https://woocommerce.com/document/woocommerce-payments/currencies/`,
  `https://woocommerce.com/document/woocommerce-payments/account-management/`,
  `https://woocommerce.com/document/payments/settings-guide/`,
  `https://woocommerce.com/document/payments/managing-money/`,
]

const uniqueUrls = urls.filter((url, index) => urls.indexOf(url) === index)

async function run() {
  const posts = []
  const metadatas = []
  const turndownService = new Turndown({
    hr: '',
    codeBlockStyle: 'fenced',
    headingStyle: 'atx',
  })

  for (const url of uniqueUrls) {
    const response = await fetch(url)
    const html = await response.text()
    const $ = cheerio.load(html)
    const postContentStr = $('article.content')
      .text()
      .replace(/(\r\n|\n|\r|\t)/gm, ' ')

    let postContent = $('article.content')
    // Remove "Back to top" links from HTML
    postContent.find('a').each((i, el) => {
      if ($(el).text().includes('Back to top')) {
        $(el).remove()
      }
    })
    const postContentHTML = postContent.html() || ''

    let markdown = turndownService
      .turndown(postContentHTML)
      // remove newlines
      .replace(/\n/g, ' ')
      // remove multiple spaces
      .replace(/ +(?= )/g, '')

    console.log(postContentStr.length, markdown.length)

    posts.push(markdown)
    metadatas.push({ url })

    console.log(`${url} fetched`)
  }

  /* Split the text into chunks */
  console.log('Splitting text into chunks')
  const textSplitter = new CharacterTextSplitter({
    chunkSize: 1000,
    separator: '. ',
  })

  const docs = await textSplitter.createDocuments(posts, metadatas)

  /* Create the vectorstore */
  console.log('Creating vectorstore')
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings())
  vectorStore.save('public/vectorstores/wcpay-docs')

  console.log(`Vectorstore created`)
}

run()
