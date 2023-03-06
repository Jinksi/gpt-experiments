// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAIChat } from 'langchain/llms'

const model = new OpenAIChat({ modelName: 'gpt-3.5-turbo', temperature: 0.9 })

function getProductDescriptionPrompt({
  title,
  description,
  tone,
  targetAudience,
}: ProductDescriptionRequestProps) {
  let prompt = `
  I want you to act as a marketing content creator.
  You will need to create engaging and informative content for creating product descriptions on ecommerce websites.
  Please write product descriptions for ecommerce websites, based on brief user-provided descriptions.
  The tone of voice used for the product descriptions should be ${tone}.
  The product descriptions should target ${targetAudience}.

  No specific guidelines or formatting requirements need to be followed.

  Product title: "${title}"
  Product description: "${description}"
  `
  return prompt
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductDescriptionResponseProps>
) {
  const body: ProductDescriptionRequestProps = req.body
  let {
    title = 'Mega Rainbow Unicorn Onesie',
    description = 'Colorful, comfortable, warm, fuzzy and magical.',
    tone = 'friendly and conversational',
    targetAudience = 'a general audience',
  } = body

  const prompt = getProductDescriptionPrompt({
    title,
    description,
    tone,
    targetAudience,
  })

  const modelResponse = await model.call(prompt)

  res.status(200).json({ description: modelResponse.trim() })
}
