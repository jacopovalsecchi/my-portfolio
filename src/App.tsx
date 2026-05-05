import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Contact />
      </main>
    </LanguageProvider>
  )
}

export default App
