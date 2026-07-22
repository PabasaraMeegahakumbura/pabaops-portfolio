import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './data/portfolioPresentation.js'
import App from './App.jsx'
import './styles/performance.css'
import { ErrorBoundary } from './components/ErrorBoundary.jsx'
import { registerServiceWorker } from './registerServiceWorker.js'

registerServiceWorker()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
