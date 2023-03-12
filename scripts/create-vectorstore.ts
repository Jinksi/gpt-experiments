import { HNSWLib } from 'langchain/vectorstores'
import { OpenAIEmbeddings } from 'langchain/embeddings'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import * as dotenv from 'dotenv'
import Papa from 'papaparse'
import fs from 'fs'
// Load .env.local into process.env
dotenv.config({ path: '.env.local' })

async function run() {
  // load csv
  const docsMetadata = Papa.parse(
    fs.readFileSync('./data/wcpay-docs.csv', 'utf8'),
    {
      header: true,
    }
  ).data as { title: string; url: string }[]

  console.log('Loading documents')
  const filesToSkip = ['What are the fees for WooCommerce Payments?.md']
  const markdownFiles = fs.readdirSync('data/wcpay-docs/md').filter((file) => {
    return !filesToSkip.includes(file)
  })

  type Post = {
    content: string
    metadata: {
      title?: string
      url?: string
    }
  }

  const posts: Post[] = markdownFiles.map((file) => {
    let metadata = docsMetadata.find((doc) => {
      return doc.title === file.replace('.md', '')
    })

    if (!metadata) {
      metadata = {
        title: file.replace('.md', ''),
        url: '',
      }
    }

    const postContent = fs.readFileSync(`data/wcpay-docs/md/${file}`, 'utf8')
    console.log(metadata.title)
    return {
      content: postContent,
      metadata,
    }
  })

  /* Split the text into chunks */
  console.log('Splitting text into chunks')
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 2000,
    chunkOverlap: 200,
  })

  const postContentArr = posts.map((post) => post.content)
  const postMetadataArr = posts.map((post) => post.metadata)
  const chunks = await textSplitter.createDocuments(
    postContentArr,
    postMetadataArr
  )
  console.log(`Split ${posts.length} documents into ${chunks.length} chunks`)

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
