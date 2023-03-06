import fetch from 'node-fetch'
import * as cheerio from 'cheerio'
import { HNSWLib } from 'langchain/vectorstores'
import { OpenAIEmbeddings } from 'langchain/embeddings'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

// Load .env.local into process.env
dotenv.config({ path: '.env.local' })

const urls = [
  'https://woocommerce.com/document/woocommerce-payments/',
  'https://woocommerce.com/document/woocommerce-payments/deposits/deposit-schedule/',
  `https://woocommerce.com/document/woocommerce-payments/deposits/instant-deposits/`,
]

async function run() {
  const posts = []
  const metadatas = []

  for (const url of urls) {
    const response = await fetch(url)
    const html = await response.text()
    const $ = cheerio.load(html)
    const postContent = $('article.content')
      .text()
      .replace(/(\r\n|\n|\r|\t)/gm, ' ')

    posts.push(postContent)
    metadatas.push({ url })

    console.log(`${url} fetched`)
  }

  /* Split the text into chunks */
  console.log('Splitting text into chunks')
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 })

  const docs = await textSplitter.createDocuments(posts, metadatas)

  /* Create the vectorstore */
  console.log('Creating vectorstore')
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings())
  vectorStore.save('vectorstores/wcpay-docs')

  console.log(`Vectorstore created`)
}

run()
