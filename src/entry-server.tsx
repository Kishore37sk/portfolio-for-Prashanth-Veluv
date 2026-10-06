import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

/** Renders the full page to static HTML at build time for SEO and fast first paint. */
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
