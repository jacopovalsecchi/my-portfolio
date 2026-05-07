import { motion } from 'framer-motion'
import { contact } from '../../data/contact'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../i18n/translations'

interface ContactItem {
  label: string
  value: string
  href: string
  icon: React.ReactNode
}

const sectionHeadingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    />
  </svg>
)

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)


export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language].contact

  const items: ContactItem[] = [
    {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <EmailIcon />,
    },
    {
      label: 'LinkedIn',
      value: 'jacopovalsecchi',
      href: contact.linkedIn,
      icon: <LinkedInIcon />,
    }
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-slate-950">
      <div className="w-full max-w-[1100px] mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-14"
          variants={sectionHeadingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <p className="font-mono text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
            <span className="opacity-50 mr-1">&gt;</span>
            {t.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.heading}
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            {t.description}
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {items.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto') ? undefined : '_blank'}
              rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group flex flex-col gap-4 p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:border-blue-500/30 hover:bg-white/8 transition-colors duration-300"
            >
              <span className="text-slate-500 group-hover:text-blue-400 transition-colors duration-200">
                {item.icon}
              </span>
              <div>
                <p className="font-mono text-xs font-semibold tracking-widest text-slate-500 uppercase mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-slate-300 group-hover:text-blue-400 transition-colors duration-200 break-all">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}