import { motion } from 'framer-motion'
import { skills } from '../../data/skills'
import type { Skill } from '../../types'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../i18n/translations'

const CATEGORY_STYLES: Record<Skill['category'], { badge: string; accent: string; dot: string }> = {
  Frontend: {
    badge: 'bg-blue-500/10 text-blue-300 border border-blue-500/20',
    accent: 'text-blue-400',
    dot: 'bg-blue-500',
  },
  Backend: {
    badge: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20',
    accent: 'text-emerald-400',
    dot: 'bg-emerald-500',
  },
  Tools: {
    badge: 'bg-purple-500/10 text-purple-300 border border-purple-500/20',
    accent: 'text-purple-400',
    dot: 'bg-purple-500',
  },
}

type Category = Skill['category']
const CATEGORIES: Category[] = ['Frontend', 'Backend', 'Tools']

const sectionHeadingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const badgeContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
}

function CategoryCard({
  category,
  categoryLabel,
  items,
}: {
  category: Category
  categoryLabel: string
  items: Skill[]
}) {
  const styles = CATEGORY_STYLES[category]

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors duration-300"
    >
      {/* Category header */}
      <div className="flex items-center gap-2 mb-5">
        <span className={`w-2 h-2 rounded-full ${styles.dot}`} />
        <h3 className={`font-mono text-sm font-semibold tracking-widest uppercase ${styles.accent}`}>
          {categoryLabel}
        </h3>
      </div>

      {/* Badges with stagger */}
      <motion.div
        className="flex flex-wrap gap-2"
        variants={badgeContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {items.map((skill) => (
          <motion.span
            key={skill.name}
            variants={badgeVariants}
            whileHover={{ scale: 1.05 }}
            className={`font-mono text-xs font-medium px-2.5 py-1 rounded-md cursor-default ${styles.badge}`}
          >
            {skill.name}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  const { language } = useLanguage()
  const t = translations[language].skills

  return (
    <section id="skills" className="py-20 bg-slate-950 bg-grid">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          className="mb-12 text-center"
          variants={sectionHeadingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <p className="font-mono text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
            <span className="opacity-50 mr-1">&gt;</span>
            {t.title}
          </p>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {t.title}
          </h2>
        </motion.div>

        {/* Cards grid with stagger */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category}
              category={category}
              categoryLabel={t.categories[category]}
              items={skills.filter((s) => s.category === category)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}