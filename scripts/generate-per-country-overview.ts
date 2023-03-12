import fs from 'fs'
import * as cheerio from 'cheerio'
import * as dotenv from 'dotenv'
import Turndown from 'turndown'

async function run() {
  const feesAllCountriesHTML = fs.readFileSync(
    'data/wcpay-docs/html/What are the fees for WooCommerce Payments?.html',
    'utf8'
  )

  const $ = cheerio.load(feesAllCountriesHTML)

  let countryFeesObjects = {}

  $('.toc-header').each((i, el) => {
    const country = $(el).find('h2').text().trim()
    if (!country) return
    const countryFees = $(el).nextUntil('.toc-header').html() || ''
    let otherFees = ''
    if (
      $(el)
        .nextUntil('.toc-header')
        .next()
        .text()
        .toLowerCase()
        .includes('other fees')
    ) {
      otherFees = $(el).nextUntil('.toc-header').next().next().html() || ''
    }

    const turndownService = new Turndown({
      hr: '',
      codeBlockStyle: 'fenced',
      headingStyle: 'atx',
    })

    let markdown = `## ${country}: Fees and eligibility\n\n`
    markdown += turndownService.turndown(countryFees)
    if (otherFees) {
      markdown += `\n\n## Other fees\n\n`
      markdown += turndownService.turndown(otherFees)

      if (!markdown.includes('Subscriptions')) {
        markdown += `\n\n## Eligibility\n\nStores in ${country} are not eligible for Subscriptions.`
      }
      if (!markdown.includes('Instant Deposits')) {
        markdown += `\n\n## Eligibility\n\nStores in ${country} are not eligible for Instant Deposits.`
      }
    } else {
      markdown += `\n\n## Eligibility\n\nStores in ${country} are not eligible for In-person Payments.`
      markdown += `\n\n## Eligibility\n\nStores in ${country} are not eligible for built-in subscriptions.`
      markdown += `\n\n## Eligibility\n\nStores in ${country} are not eligible for Instant Deposits.`
    }

    // Save markdown to file.
    const title = `Fees and eligibility per country: ${country}`
    fs.writeFileSync(`data/wcpay-docs/md/${title}.md`, markdown)
  })
}

run()
