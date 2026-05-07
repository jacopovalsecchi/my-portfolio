import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '../../data/navigation'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../i18n/translations'
import type { Language } from '../../context/LanguageContext'

const LANGUAGES: { code: Language; flag: string; label: string }[] = [
  { code: 'en', flag: '🇬🇧', label: 'EN' },
  { code: 'it', flag: '🇮🇹', label: 'IT' },
]

const navbarVariants = {
  hidden: { y: -64, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

const navContentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.35 },
  },
}

const navItemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = translations[language].nav

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-40% 0px -55% 0px' },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleLinkClick = (href: string) => {
    setMenuOpen(false)
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLabels: Record<string, string> = {
    '#skills': t.skills,
    '#projects': t.projects,
    '#experience': t.experience,
    '#contact': t.contact,
  }

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-sm border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-mono text-white font-semibold text-base tracking-tight hover:text-blue-400 transition-colors duration-200"
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Jacopo Valsecchi
        </motion.a>

        {/* Desktop links + language switcher */}
        <motion.div
          className="hidden sm:flex items-center gap-8"
          variants={navContentVariants}
          initial="hidden"
          animate="visible"
        >
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.slice(1)
              const isActive = activeId === id
              return (
                <motion.li key={link.href} variants={navItemVariants}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick(link.href)
                    }}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-blue-400' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {navLabels[link.href] ?? link.label}
                  </a>
                </motion.li>
              )
            })}
          </ul>

          {/* Language switcher */}
          {/* <motion.div
           className="flex items-center gap-1 border border-white/10 rounded-lg p-1"
           variants={navItemVariants}
         >
           {LANGUAGES.map(({ code, flag, label }) => (
             <button
               key={code}
               type="button"
               onClick={() => setLanguage(code)}
               aria-label={`Switch to ${label}`}
               className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition-all duration-200 ${
                 language === code
                   ? 'bg-blue-600 text-white'
                   : 'text-slate-400 hover:text-white hover:bg-white/5'
               }`}
             >
               <span className="text-base leading-none">{flag}</span>
               {label}
             </button>
           ))}
         </motion.div> */}
        </motion.div>

        {/* Hamburger button */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 bg-slate-950 border-t border-white/10 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const id = link.href.slice(1)
            const isActive = activeId === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link.href)
                  }}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-blue-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {navLabels[link.href] ?? link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile language switcher */}
        <div className="px-6 pb-5 flex items-center gap-2">
          {LANGUAGES.map(({ code, flag, label }) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                setLanguage(code)
                setMenuOpen(false)
              }}
              aria-label={`Switch to ${label}`}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                language === code
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'text-slate-400 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              <span className="text-base leading-none">{flag}</span>
              {label}
            </button>
          ))}
        </div>
      </div>
    </motion.header>
  )
}