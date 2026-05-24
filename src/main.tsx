import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { LangProvider } from './contexts/LangContext'

// Always start at the top on hard reload (don't restore scroll position).
// Anchor links (#klassen etc.) still work because the router handles them
// after this initial scroll.
if (typeof window !== 'undefined') {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }
  // Only scroll to top if there's no explicit hash in the URL
  if (!window.location.hash) {
    window.scrollTo(0, 0)
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LangProvider>
        <App />
      </LangProvider>
    </BrowserRouter>
  </StrictMode>,
)
