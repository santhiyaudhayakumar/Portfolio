import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar.tsx'
import Hero from './Components/Hero.tsx'
import About from './Components/About.tsx'
import Experience from './Components/Experience.tsx'
import Contact from './Contact.tsx'
import Work from './Components/Work.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Work />
    <Experience />
    <Contact />
  </StrictMode>,
)
