import { useEffect, useRef, useState } from 'react'
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

function CategoryCard({
  category,
  categoryLabel,
  items,
  index,
}: {
  category: Category
  categoryLabel: string
  items: Skill[]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const styles = CATEGORY_STYLES[category]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Category header */}
      <div className="flex items-center gap-2 mb-5">
        <span className={`w-2 h-2 rounded-full ${styles.dot}`} />
        <h3 className={`font-mono text-sm font-semibold tracking-widest uppercase ${styles.accent}`}>
          {categoryLabel}
        </h3>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill.name}
            className={`font-mono text-xs font-medium px-2.5 py-1 rounded-md transition-all duration-200 hover:scale-105 ${styles.badge}`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { language } = useLanguage()
  const t = translations[language].skills

  return (
    <section id="skills" className="py-20 bg-slate-950 bg-grid">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="font-mono text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
            <span className="opacity-50 mr-1">&gt;</span>
            {t.title}
          </p>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((category, index) => (
            <CategoryCard
              key={category}
              category={category}
              categoryLabel={t.categories[category]}
              items={skills.filter((s) => s.category === category)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}