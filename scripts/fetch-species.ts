// index.ts
import fs from 'fs/promises'
import path from 'path'
import TurndownService from 'turndown'
import wtf from 'wtf_wikipedia'

const pageTitles = [
  // Add your list of page titles here
  'Gang-gang cockatoo',
  'Capybara',
  'Eucryphia jinksii',
]

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

const htmlToMd = (html: string): string => {
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    hr: '',
    codeBlockStyle: 'fenced',
  })
  return turndownService.turndown(html)
}

const saveToFile = async (title: string, content: string): Promise<void> => {
  const filePath = path.join('data', 'species', `${title}.md`)
  await fs.writeFile(filePath, content)
}

;(async () => {
  const processTitle = async (title: string) => {
    try {
      const wikiResult = await fetchWikipediaArticle(title)
      const markdown = htmlToMd(wikiResult.text)
      await saveToFile(title, markdown)
      console.log(`Saved ${title}.md`)
    } catch (error) {
      console.error(`Error processing ${title}:`, error)
    }
  }

  const tasks = pageTitles.map((title) => processTitle(title))
  await Promise.all(tasks)
})()
