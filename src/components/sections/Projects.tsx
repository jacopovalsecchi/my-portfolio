import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import type { Project } from '../../types'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../i18n/translations'

const sectionHeadingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="flex flex-col bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-900/20 transition-colors duration-300"
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-3">{project.title}</h3>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs font-medium px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language].projects

  return (
    <section id="projects" className="py-20 bg-slate-900">
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
            {t.sectionLabel}
          </p>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {t.title}
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}