import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Analytics />
    </LanguageProvider>
  )
}

export default App
