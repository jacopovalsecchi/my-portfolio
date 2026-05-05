import { useState, useEffect } from 'react'
import { navLinks } from '../../data/navigation'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../i18n/translations'
import type { Language } from '../../context/LanguageContext'

const LANGUAGES: { code: Language; flag: string; label: string }[] = [
  { code: 'en', flag: '🇬🇧', label: 'EN' },
  { code: 'it', flag: '🇮🇹', label: 'IT' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = translations[language].nav

  // Solid background + shadow once user scrolls past hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracking via IntersectionObserver
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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleLinkClick = (href: string) => {
    setMenuOpen(false)
    const el = document.getElementById(href.slice(1))
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLabels: Record<string, string> = {
    '#skills': t.skills,
    '#projects': t.projects,
    '#experience': t.experience,
    '#contact': t.contact,
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="text-slate-900 font-semibold text-base tracking-tight hover:text-blue-600 transition-colors duration-200"
        >
          Jacopo Valsecchi
        </a>

        {/* Desktop links + language switcher */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="flex items-center gap-8">
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
                      isActive
                        ? 'text-blue-600'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {navLabels[link.href] ?? link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Language switcher */}
          <div className="flex items-center gap-1 border border-slate-200 rounded-lg p-1">
            {LANGUAGES.map(({ code, flag, label }) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                aria-label={`Switch to ${label}`}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition-all duration-200 ${
                  language === code
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span className="text-base leading-none">{flag}</span>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Hamburger button */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 bg-white border-t border-slate-100 ${
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
                    isActive
                      ? 'text-blue-600'
                      : 'text-slate-500 hover:text-slate-900'
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
                  : 'text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              <span className="text-base leading-none">{flag}</span>
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}