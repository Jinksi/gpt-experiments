// pages/api/wikipedia.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { fetchWikipediaArticle } from '../../lib/wiki'

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
