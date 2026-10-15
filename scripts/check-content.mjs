import { readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sources = JSON.parse(await readFile(resolve(root, 'content-sources.json'), 'utf8'))
const errors = []

for (const [name, repository] of Object.entries(sources.repositories)) {
  if (!/^[0-9a-f]{40}$/.test(repository.revision)) errors.push(`${name}: revision must be a full Git commit SHA`)
  if (!repository.url.startsWith('https://github.com/cx-pl/')) errors.push(`${name}: unexpected source URL`)
}

for (const path of ['docs/language/reference.md', 'docs/generated/standard-library-contracts.md', 'docs/generated/runtime-abi.md', 'docs/generated/HelloWorld.cx', 'docs/licenses/cxc-license.md', 'docs/licenses/cxcore-license.md', 'docs/licenses/examples-license.md', 'docs/licenses/vscode-extension-license.md', 'samples/Counter.cx']) {
  try { await readFile(resolve(root, path)) } catch { errors.push(`Missing imported content: ${path}`) }
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
} else {
  console.log('Content pins and required generated files are present.')
}
