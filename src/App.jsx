import './App.css'
import Hero from './components/Hero.jsx'
import Cursor from './components/Cursor.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import { useEffect } from 'react'
import { initLenis } from './helpers/lenis.js'


function App() {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <>
    <Cursor />
    <Hero />
    <About />
    <Work />
    <Experience />
    <Contact />
    </>
  )
}

export default App
