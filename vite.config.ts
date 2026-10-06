import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Fallback used until VITE_SITE_URL is set to the real production domain. */
const DEFAULT_SITE_URL = 'https://prashanth-velu-v.vercel.app'

/**
 * Injects the canonical site URL into index.html (`__SITE_URL__` placeholders)
 * and emits robots.txt + sitemap.xml at build time so every absolute URL
 * (canonical, Open Graph, JSON-LD, sitemap) stays in sync from one variable.
 */
function siteMeta(siteUrl: string): Plugin {
  const url = siteUrl.replace(/\/+$/, '')
  return {
    name: 'site-meta',
    transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', url),
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10)
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${url}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig(({ mode, isSsrBuild }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  return {
    plugins: [react(), tailwindcss(), siteMeta(env.VITE_SITE_URL || DEFAULT_SITE_URL)],
    build: {
      target: 'es2020',
      // The manifest lets scripts/prerender.mjs find the hashed hero-intro entry.
      manifest: !isSsrBuild,
      rollupOptions: isSsrBuild
        ? undefined
        : {
            // Second entry: GSAP core + hero timeline only, injected as an async
            // module so the intro can start before the React bundle arrives.
            input: { main: 'index.html', heroIntro: 'src/hero-intro.ts' },
          },
    },
  }
})
