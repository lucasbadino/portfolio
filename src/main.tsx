import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Footer } from './views/footer'
import { Navbar } from './views/navbar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Footer />
  </StrictMode>,
)
