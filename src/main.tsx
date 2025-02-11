import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from "react-router"
import { NuqsAdapter } from 'nuqs/adapters/react'
import { ThemeProvider } from "@/context/ThemeProvider"

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider >
        <NuqsAdapter>
          <App />
        </NuqsAdapter>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
