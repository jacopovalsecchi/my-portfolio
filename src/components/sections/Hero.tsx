import profileImg from '../../assets/IMG_8637.jpeg'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../i18n/translations'
import { hero } from '../../data/hero'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 pb-8 bg-slate-950 bg-grid animate-fade-in overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative w-full max-w-[1100px] mx-auto flex flex-col-reverse sm:flex-row items-center gap-12 sm:gap-16">

        {/* Text content */}
        <div className="flex-1 text-center sm:text-left">
          <p className="font-mono text-sm font-semibold tracking-widest text-blue-400 uppercase mb-4">
            <span className="opacity-50 mr-1">&gt;</span>
            {t.role}
            <span className="animate-blink">_</span>
          </p>
          <h1 className="font-mono text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {hero.name}
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-blue-600 text-white text-sm font-semibold tracking-wide hover:bg-blue-500 transition-colors duration-200"
            >
              {t.cta.primary}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-white/20 text-slate-300 text-sm font-semibold tracking-wide hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              {t.cta.secondary}
            </a>
          </div>
        </div>

        {/* Profile picture */}
        <div className="relative shrink-0">
          {/* Corner brackets */}
          <span className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-blue-400/60 rounded-tl-sm" />
          <span className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-blue-400/60 rounded-tr-sm" />
          <span className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-blue-400/60 rounded-bl-sm" />
          <span className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-blue-400/60 rounded-br-sm" />
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl pointer-events-none" />
          {/* Image */}
          <div className="relative w-52 sm:w-64 lg:w-72 aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-blue-900/40">
            <img
              src={profileImg}
              alt={hero.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  )
}