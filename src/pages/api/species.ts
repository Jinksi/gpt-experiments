import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'
import cors from 'cors'
import { OpenAIChat } from 'langchain/llms'
// import { loadQAStuffChain } from 'langchain/chains'
import { Document } from 'langchain/document'
import speciesData from './species.json'

// Get keys from speciesData
type SpeciesNames = keyof typeof speciesData

type SpeciesQAResponse = {
  answer: string
  answerDuration: number
}

type SpeciesQAProps = {
  question: string
  species: SpeciesNames
  audience?: string
  chatHistory?: string[]
  language?: string
}
async function generateAnswer({
  question,
  species,
  audience = 'adult',
  chatHistory,
  language = 'English',
}: SpeciesQAProps): Promise<SpeciesQAResponse> {
  const thisSpecies = speciesData[species]
  if (!thisSpecies) {
    throw new Error(`Species ${species} not found`)
  }

  // const docs = [new Document({ pageContent: speciesData[species].content })]

  console.log('Species: ' + species)
  console.log('Audience: ' + audience)

  // Prepare the prompt
  const query = `
  Answer questions about ${thisSpecies.name.toLocaleUpperCase()}}.
  Use the following information to answer the question:
  ${thisSpecies.content}

  Question: ${question}.
  Explain to a ${audience}.
  Respond in the language: ${language}.
  `.replace(/\n\s+/g, ' ')

  // Initialize the LLM to use to answer the question
  const model = new OpenAIChat({
    modelName: 'gpt-3.5-turbo',
    temperature: 0.5,
    prefixMessages: [
      // { role: 'system', content: systemMessage },
      // ...(chatHistory || []),
    ],
    // cache: false,
  })

  // Create the chain
  // const chain = loadQAStuffChain(model)

  // Ask it a question
  console.log(question)
  const start = Date.now()

  console.log('ChatHistory length: ' + chatHistory?.length)
  // const modelResponse = await chain.call({
  //   input_documents: docs,
  //   question,
  //   chat_history: chatHistory,
  // })

  const modelResponse = await model.call(query)

  const end = Date.now()
  const answerDuration = end - start
  console.log(`Answered in ${answerDuration}ms`)

  return {
    answer: modelResponse,
    answerDuration,
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body: SpeciesQAProps = req.body

  try {
    const answer = await generateAnswer({
      ...body,
    })
    res.status(200).json({ ...answer })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error?.toString() })
  }
}
