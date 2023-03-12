import { HNSWLib } from 'langchain/vectorstores'
import { OpenAIEmbeddings } from 'langchain/embeddings'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import * as dotenv from 'dotenv'
import Papa from 'papaparse'
import fs from 'fs'
// Load .env.local into process.env
dotenv.config({ path: '.env.local' })

// load csv
const docsMetadata = Papa.parse(
  fs.readFileSync('./data/wcpay-docs.csv', 'utf8'),
  {
    header: true,
  }
).data as { title: string; url: string }[]

async function run() {
  /* Load the documents */
  console.log('Loading documents')
  const posts = docsMetadata.map((doc) => {
    const postContent = fs.readFileSync(
      `data/wcpay-docs/md/${doc.title}.md`,
      'utf8'
    )
    return postContent
  })

  /* Split the text into chunks */
  console.log('Splitting text into chunks')
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 2000,
    chunkOverlap: 200,
  })

  const chunks = await textSplitter.createDocuments(posts, docsMetadata)
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
