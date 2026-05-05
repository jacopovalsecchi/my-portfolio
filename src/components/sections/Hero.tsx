import profileImg from '../../assets/IMG_8637.jpeg'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../i18n/translations'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-1 pb-1 bg-white animate-fade-in">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col-reverse sm:flex-row items-center gap-12 sm:gap-16">

        {/* Text content */}
        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4">
            {t.role}
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Jacopo Valsecchi
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-blue-600 text-white text-sm font-semibold tracking-wide hover:bg-blue-700 transition-colors duration-200"
            >
              {t.cta.primary}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-slate-200 text-slate-700 text-sm font-semibold tracking-wide hover:border-slate-300 hover:bg-slate-50 transition-colors duration-200"
            >
              {t.cta.secondary}
            </a>
          </div>
        </div>

        {/* Profile picture */}
        <div className="shrink-0">
          <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-4 ring-slate-100 shadow-lg">
            <img
              src={profileImg}
              alt="Jacopo Valsecchi"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  )
}