export const translations = {
  en: {
    nav: {
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      role: 'Web Developer',
      description:
        'Experienced Web Developer with a strong background in delivering high quality digital solutions and leading collaborative teams. Successful team coordinator with experience leading team activities, fostering collaboration, and driving projects to completion. Skilled in both back-end and front-end development, with a strong understanding of Scrum and Agile methodologies.',
      cta: {
        primary: 'View Projects',
        secondary: 'Contact Me',
      },
    },
    experience: {
      title: 'Experience',
      present: 'Present',
    },
    contact: {
      sectionLabel: 'Contact',
      heading: 'Get in touch',
      description:
        'Available for new opportunities. Feel free to reach out via any of the channels below.',
    },
  },
  it: {
    nav: {
      skills: 'Competenze',
      projects: 'Progetti',
      experience: 'Esperienza',
      contact: 'Contatti',
    },
    hero: {
      role: 'Web Developer',
      description:
        'Web Developer con solida esperienza nella realizzazione di soluzioni digitali di alta qualità e nella coordinazione di team collaborativi. Coordinatore di successo con esperienza nella gestione delle attività di team, promozione della collaborazione e conduzione dei progetti al completamento. Competente nello sviluppo back-end e front-end, con una solida conoscenza delle metodologie Scrum e Agile.',
      cta: {
        primary: 'Vedi Progetti',
        secondary: 'Contattami',
      },
    },
    experience: {
      title: 'Esperienza',
      present: 'Presente',
    },
    contact: {
      sectionLabel: 'Contatti',
      heading: 'Scrivimi',
      description:
        'Disponibile per nuove opportunità. Contattami tramite uno dei canali qui sotto.',
    },
  },
} as const

export type Translations = typeof translations