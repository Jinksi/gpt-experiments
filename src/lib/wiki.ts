import wtf from 'wtf_wikipedia'

export async function fetchWikipediaArticle(title: string) {
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
  const infobox = doc.infobox()?.keyValue()
  return { infobox, text, json }
}
