import { copyFile, mkdir, readdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourceDir = resolve(root, 'samples')
const publicDir = resolve(root, 'docs/public/samples')
await mkdir(publicDir, { recursive: true })

for (const entry of await readdir(sourceDir, { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith('.cx')) {
    await copyFile(resolve(sourceDir, entry.name), resolve(publicDir, entry.name))
  }
}
