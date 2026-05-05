import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </LanguageProvider>
  )
}

export default App
