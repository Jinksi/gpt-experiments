// pages/api/wikipedia.ts
import { NextApiRequest, NextApiResponse } from 'next'
import wtf from 'wtf_wikipedia'

async function fetchWikipediaArticle(title: string): Promise<Object> {
  let doc = await wtf.fetch(title)

  // Only use the first doc if array
  if (Array.isArray(doc)) {
    doc = doc[0]
  }

  if (!doc) {
    throw new Error('No Wikipedia article found')
  }

  const json = doc.json()
  const text = doc.text()
  return { json, text }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title } = req.query

  if (typeof title !== 'string') {
    res.status(400).json({ error: 'Invalid title parameter' })
    return
  }

  try {
    const data = await fetchWikipediaArticle(title)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Wikipedia article' })
  }
}
