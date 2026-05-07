import { motion } from 'framer-motion'
import profileImg from '../../assets/IMG_8637.jpeg'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../i18n/translations'
import { hero } from '../../data/hero'

const letterContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03, delayChildren: 0.2 },
  },
}

const letterVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

const ctaContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
}

const ctaItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language].hero

  // Approximate time for all letters to finish: 0.2 + 16*0.03 + 0.35 ≈ 1.03s
  const postNameDelay = 1.05

  return (
    <section className="relative flex items-center justify-center px-6 pt-28 pb-6 bg-slate-950 bg-grid overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative w-full max-w-[1100px] mx-auto flex flex-col-reverse sm:flex-row items-center gap-12 sm:gap-16">

        {/* Text content */}
        <div className="flex-1 text-center sm:text-left">
          {/* Role label */}
          <motion.p
            className="font-mono text-sm font-semibold tracking-widest text-blue-400 uppercase mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <span className="opacity-50 mr-1">&gt;</span>
            {t.role}
            <span className="animate-blink">_</span>
          </motion.p>

          {/* Name — letter by letter */}
          <motion.h1
            className="font-mono text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            variants={letterContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {hero.name.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : undefined }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: postNameDelay, ease: 'easeOut' }}
          >
            {t.description}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4"
            variants={ctaContainerVariants}
            initial="hidden"
            animate="visible"
            // Start after description begins to appear
            style={{ '--delay': `${postNameDelay + 0.2}s` } as React.CSSProperties}
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-blue-600 text-white text-sm font-semibold tracking-wide hover:bg-blue-500 transition-colors duration-200"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: postNameDelay + 0.2, ease: 'easeOut' },
                },
              }}
            >
              {t.cta.primary}
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-white/20 text-slate-300 text-sm font-semibold tracking-wide hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: postNameDelay + 0.32, ease: 'easeOut' },
                },
              }}
            >
              {t.cta.secondary}
            </motion.a>
          </motion.div>
        </div>

        {/* Profile picture */}
        <motion.div
          className="relative shrink-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          {/* Corner brackets */}
          <span className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-blue-400/60 rounded-tl-sm" />
          <span className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-blue-400/60 rounded-tr-sm" />
          <span className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-blue-400/60 rounded-bl-sm" />
          <span className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-blue-400/60 rounded-br-sm" />
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl pointer-events-none" />
          {/* Image */}
          <div className="relative w-44 sm:w-52 lg:w-60 aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-blue-900/40">
            <img
              src={profileImg}
              alt={hero.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}