import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const readdir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

async function readAndSaveMdFiles(): Promise<void> {
  const speciesDir = './data/species'
  const outputFilename = './src/pages/api/species.json'

  try {
    const filenames = await readdir(speciesDir)
    const mdFiles = filenames.filter(
      (filename) => path.extname(filename) === '.md'
    )

    const speciesData = await Promise.all(
      mdFiles.map(async (filename) => {
        const filePath = path.join(speciesDir, filename)
        const content = await readFile(filePath, 'utf-8')
        const name = path.basename(filename, '.md')
        return { [name.toLowerCase()]: { name, content } }
      })
    )

    // Merge all species data into one object
    const speciesDataMerged = speciesData.reduce(
      (acc, cur) => ({ ...acc, ...cur }),
      {}
    )

    await writeFile(outputFilename, JSON.stringify(speciesDataMerged, null, 2))
    console.log(`Saved ${mdFiles.length} species to ${outputFilename}`)
  } catch (error) {
    console.error('Error reading and saving markdown files:', error)
  }
}

readAndSaveMdFiles()
