import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Footer } from './views/footer';
import { Navbar } from './views/navbar';
import { Home } from './views/Home';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Home />
    <Footer />
  </StrictMode>,
)
