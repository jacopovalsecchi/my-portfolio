import type { Experience } from '../types/experience'

export const experiences: Experience[] = [
  {
    company: 'Elixir Solutions',
    location: 'Brussels',
    role: 'Web Developer',
    period: { start: '04/2025', end: null },
    description: [
      'Designing and implementing data synchronization solutions between HubSpot and third-party software platforms.',
      'Built an internal TypeScript/JavaScript automation tool to generate invoices by synchronizing data between Teamwork and Odoo.',
      'R&D project to build an AI agent integrated with HubSpot to analyze upsell/cross-sell opportunities and churn risk using Spring and Mistral AI.',
      'Developed custom JavaScript integration logic to synchronize data between HubSpot/DealHub and customer internal systems.',
      'Migrated the ElixirSync integration from SAP C4C v1 to SAP C4C v2.',
    ],
    technologies: ['TypeScript', 'JavaScript', 'HubSpot', 'Spring', 'Mistral AI', 'SAP C4C', 'N8N'],
  },
  {
    company: 'KPMG Business Services',
    location: 'Milan',
    role: 'Web Developer',
    period: { start: '04/2021', end: '04/2025' },
    description: [
      'Development and maintenance of full stack web applications using React, JavaScript, and Java.',
      'Coordination of team activities, promoting best practices and meeting deadlines.',
      'Active participation in Agile development cycles, including sprint planning, daily meetings, and retrospectives.',
      'Support to the product owner in analyzing business requirements.',
    ],
    technologies: ['React', 'JavaScript', 'Java', 'Hibernate', 'JBoss', 'Oracle SQL', 'Git', 'Cypress', 'Apache Camel'],
  },
  {
    company: 'KPMG Business Services',
    location: 'Milan',
    role: 'ITS Specialist',
    period: { start: '2016', end: '2021' },
    description: [
      'User administration and management of accounting/tax application permits.',
      'Implementation and management of tracked archiving and production databases.',
      'Interaction and collaboration with application software suppliers.',
    ],
    technologies: ['Oracle SQL', 'Git'],
  },
  {
    company: 'KPMG Italy Fides Administrative Services',
    location: 'Milan',
    role: 'Staff Accountant',
    period: { start: '2012', end: '2016' },
    description: [
      'Management of accounting tasks and maintenance of client relationships.',
      'Preparation of annual and periodic tax returns.',
    ],
  },
]