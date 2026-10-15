import { execFileSync } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const websiteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const workspaceRoot = resolve(websiteRoot, '..')
const sources = JSON.parse(await readFile(resolve(websiteRoot, 'content-sources.json'), 'utf8'))

const imports = [
  ['cxc', 'docs/language-reference.md', 'docs/language/reference.md'],
  ['cxcore', 'docs/standard-library-contracts.md', 'docs/generated/standard-library-contracts.md'],
  ['cxcore', 'docs/runtime-abi.md', 'docs/generated/runtime-abi.md'],
  ['examples', '0. Hello World/HelloWorld.cx', 'docs/generated/HelloWorld.cx'],
  ['examples', '1. Classes/Classes.cx', 'docs/generated/Classes.cx'],
  ['examples', '3. Arrays and Loops/ArraysAndLoops.cx', 'docs/generated/ArraysAndLoops.cx'],
  ['cxc', 'LICENSE', 'docs/licenses/cxc-license.md'],
  ['cxcore', 'LICENSE', 'docs/licenses/cxcore-license.md'],
  ['examples', 'LICENSE', 'docs/licenses/examples-license.md'],
  ['vscode-extension', 'LICENSE', 'docs/licenses/vscode-extension-license.md'],
]

for (const [repository, sourcePath, outputPath] of imports) {
  const source = sources.repositories[repository]
  const checkout = resolve(workspaceRoot, repository)
  const content = execFileSync('git', ['-C', checkout, 'show', `${source.revision}:${sourcePath}`], { encoding: 'utf8' })
  const sourceUrl = `${source.url}/blob/${source.revision}/${sourcePath.split('/').map(encodeURIComponent).join('/')}`
  let output = content

  if (outputPath.endsWith('.md')) {
    // Escape angle brackets in prose and inline code so Vue's Markdown SFC
    // compiler cannot mistake generic type notation such as ptr<T> for HTML.
    let inFence = false
    output = output.split(/(?<=\n)/).map((line) => {
      if (/^\s*(```|~~~)/.test(line)) inFence = !inFence
      return inFence ? line : line.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    }).join('')
    output = output.replace(/\]\((?!https?:|mailto:|#)([^)]+)\)/g, (_match, target) => {
      const [file, ...anchor] = target.split('#')
      let linkedSource = source
      let linkedPath = file
      if (file.startsWith('../../cxcore/')) {
        linkedSource = sources.repositories.cxcore
        linkedPath = file.slice('../../cxcore/'.length)
      } else {
        const repoPath = repository === 'cxc' || repository === 'cxcore' ? 'docs/' : ''
        linkedPath = `${repoPath}${file.replace(/^(\.\.\/)+/, '')}`
      }
      const url = `${linkedSource.url}/blob/${linkedSource.revision}/${linkedPath.split('/').map(encodeURIComponent).join('/')}`
      return `](${url}${anchor.length ? `#${anchor.join('#').toLowerCase().replace(/[^\p{L}\p{N}-]+/gu, '-')}` : ''})`
    })
    output = outputPath.includes('/licenses/')
      ? `> Full license text from [${repository}](${sourceUrl}) at revision \`${source.revision}\`.\n\n\`\`\`text\n${output.trimEnd()}\n\`\`\`\n`
      : `> Imported from [${repository}](${sourceUrl}) at revision \`${source.revision}\`. This snapshot is updated deliberately; it does not track repository changes automatically.\n\n${output}`
  }

  const destination = resolve(websiteRoot, outputPath)
  await mkdir(dirname(destination), { recursive: true })
  await writeFile(destination, output)
  console.log(`${repository}:${sourcePath} -> ${outputPath}`)
}
