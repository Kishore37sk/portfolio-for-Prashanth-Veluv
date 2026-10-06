import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/inter/wght.css'
import '@fontsource-variable/playfair-display/wght.css'
import '@fontsource-variable/playfair-display/wght-italic.css'
import './styles/globals.css'
import App from './App'

const container = document.getElementById('root')
if (!container) throw new Error('Root element #root not found')

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production HTML is prerendered (scripts/prerender.mjs); hydrate it when present.
if (container.firstElementChild) hydrateRoot(container, app)
else createRoot(container).render(app)
