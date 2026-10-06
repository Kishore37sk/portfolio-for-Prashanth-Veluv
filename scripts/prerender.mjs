// Post-build step:
// 1. Injects the server-rendered app into dist/index.html (SEO + fast first paint).
// 2. Inlines the single stylesheet so first paint needs no extra round trip.
// 3. Injects the hero-intro entry as an async module (starts the GSAP intro
//    before React hydrates), with modulepreload hints for its imports.
// 4. Removes the temporary SSR bundle and the build manifest.
// (Font preloads were measured and rejected: on slow mobile connections they
//  compete with the JS bundle and delay the hero.)
import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const htmlPath = resolve(dist, 'index.html')
const ssrDir = resolve(root, 'dist-ssr')

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
let html = await readFile(htmlPath, 'utf8')
if (!html.includes('<!--app-html-->')) throw new Error('Placeholder <!--app-html--> not found in dist/index.html')
html = html.replace('<!--app-html-->', render())

const cssLink = html.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/)
if (cssLink) {
  const css = await readFile(resolve(dist, '.' + cssLink[1]), 'utf8')
  html = html.replace(cssLink[0], () => `<style>${css}</style>`)
  await rm(resolve(dist, '.' + cssLink[1]))
}

const manifestPath = resolve(dist, '.vite/manifest.json')
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))
const intro = manifest['src/hero-intro.ts']
if (!intro) throw new Error('hero-intro entry missing from the build manifest')
const preloads = (intro.imports ?? [])
  .map((key) => manifest[key]?.file)
  .filter((file) => file && !html.includes(`href="/${file}"`))
  .map((file) => `<link rel="modulepreload" crossorigin href="/${file}">`)
const introTags = [`<script type="module" async crossorigin src="/${intro.file}"></script>`, ...preloads].join('\n    ')
html = html.replace('</title>', (m) => `${m}\n    ${introTags}`)

await writeFile(htmlPath, html)
await rm(resolve(dist, '.vite'), { recursive: true, force: true })
await rm(ssrDir, { recursive: true, force: true })
console.log(`✓ Prerendered dist/index.html${cssLink ? ' (CSS inlined)' : ''}`)
