import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import { TRPCProvider } from "@/providers/trpc"
import { LangProvider } from "@/providers/lang"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LangProvider>
        <TRPCProvider>
          <App />
        </TRPCProvider>
      </LangProvider>
    </BrowserRouter>
  </StrictMode>,
)
