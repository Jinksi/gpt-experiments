import fetch from 'node-fetch'
import * as cheerio from 'cheerio'
import { HNSWLib } from 'langchain/vectorstores'
import { OpenAIEmbeddings } from 'langchain/embeddings'
import { CharacterTextSplitter } from 'langchain/text_splitter'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import Turndown from 'turndown'

import wcpayDocs from '../data/wcpay-docs.json' assert { type: 'json' }

// Load .env.local into process.env
dotenv.config({ path: '.env.local' })

type Doc = {
  url: string
  title: string
}
const docs: Doc[] = wcpayDocs

async function run() {
  const posts = []
  const metadatas: Doc[] = []
  // const turndownService = new Turndown({
  //   hr: '',
  //   codeBlockStyle: 'fenced',
  //   headingStyle: 'atx',
  // })

  for (const { url, title } of docs) {
    if (metadatas.find((metadata) => metadata.url === url)) {
      console.log(`${url} already fetched`)
      continue
    }

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

    // const postContentHTML = postContent.html() || ''
    // let markdown = turndownService
    //   .turndown(postContentHTML)
    //   // remove newlines
    //   .replace(/\n/g, ' ')
    //   // remove multiple spaces
    //   .replace(/ +(?= )/g, '')

    // console.log(postContentStr.length, markdown.length)

    // Using text version for now, rather than markdown
    posts.push(postContentStr)
    metadatas.push({ url, title })

    console.log(`${url} fetched, ${postContentStr.length} chars`)
  }

  /* Split the text into chunks */
  console.log('Splitting text into chunks')
  const textSplitter = new CharacterTextSplitter({
    chunkSize: 1000,
    separator: '. ',
  })

  const chunks = await textSplitter.createDocuments(posts, metadatas)

  /* Create the vectorstore */
  console.log('Creating vectorstore')
  const vectorStore = await HNSWLib.fromDocuments(
    chunks,
    new OpenAIEmbeddings()
  )
  vectorStore.save('public/vectorstores/wcpay-docs')

  console.log(`Vectorstore created`)
}

run()
