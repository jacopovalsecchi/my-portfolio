import { useEffect, useRef, useState } from 'react'
import { experiences } from '../../data/experience'
import type { Experience } from '../../types/experience'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../i18n/translations'

function ExperienceCard({ experience, index, present }: { experience: Experience; index: number; present: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

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
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const period = experience.period.end
    ? `${experience.period.start} – ${experience.period.end}`
    : `${experience.period.start} – ${present}`

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20 mt-1.5 shrink-0" />
        {index < experiences.length - 1 && (
          <div className="w-px flex-1 bg-white/10 mt-2" />
        )}
      </div>

      {/* Card */}
      <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:border-blue-500/30 hover:bg-white/8 transition-all duration-300 mb-10 flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
            <p className="text-sm font-medium text-blue-400">
              {experience.company} — {experience.location}
            </p>
          </div>
          <span className="text-xs font-medium text-slate-400 bg-white/5 border border-white/10 rounded-full px-3 py-1 whitespace-nowrap self-start sm:self-center font-mono">
            {period}
          </span>
        </div>

        <ul className="space-y-1.5 mb-4">
          {experience.description.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-300 leading-relaxed">
              <span className="text-blue-400 mt-0.5 shrink-0">›</span>
              {item}
            </li>
          ))}
        </ul>

        {experience.technologies && experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/10">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium font-mono bg-white/10 text-slate-400 rounded-md px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  const { language } = useLanguage()
  const t = translations[language].experience

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center tracking-tight">
          {t.title}
        </h2>

        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={`${exp.company}-${exp.role}-${index}`}
              experience={exp}
              index={index}
              present={t.present}
            />
          ))}
        </div>
      </div>
    </section>
  )
}