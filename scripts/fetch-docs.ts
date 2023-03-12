import fetch from 'node-fetch'
import fs from 'fs'
import * as cheerio from 'cheerio'
import * as dotenv from 'dotenv'
import Turndown from 'turndown'
import Papa from 'papaparse'
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
  const turndownService = new Turndown({
    hr: '',
    codeBlockStyle: 'fenced',
    headingStyle: 'atx',
  })

  for (const { url, title } of docsMetadata) {
    if (!url) continue

    console.log(`Fetching ${url}`)

    const response = await fetch(url)
    const html = await response.text()
    const $ = cheerio.load(html)

    // Get the content of the post.
    let postContent = $('article.content')

    // Remove "Back to top" links from HTML.
    postContent.find('a').each((i, el) => {
      if ($(el).text().includes('Back to top')) {
        $(el).remove()
      }
    })

    // Remove .wccom-docs-breadcrumb elements.
    postContent.find('.wccom-docs-breadcrumb').remove()

    const postContentHTML = postContent.html() || ''
    // Save html to file.
    fs.writeFileSync(`data/wcpay-docs/html/${title}.html`, postContentHTML)

    // Convert html to markdown.
    const markdown = turndownService.turndown(postContentHTML)
    // Save markdown to file.
    fs.writeFileSync(`data/wcpay-docs/md/${title}.md`, markdown)
  }
}

run()
