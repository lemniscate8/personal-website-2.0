import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/personal-website-2.0">
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
