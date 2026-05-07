import type { Experience } from '../types/experience'

export const experiences: Experience[] = [
  {
    company: 'Elixir Solutions',
    location: 'Brussels',
    role: 'Web Developer',
    period: { start: '04/2025', end: null },
    description: [
        'Development of internal tools to optimize company processes',
        'Development and maintenance of a middleware application responsible for synchronizing data between HubSpot and third-party tools',
        'Responsible for technical analysis and effort estimation'
    ],
    technologies: ['TypeScript', 'JavaScript', 'HubSpot', 'Spring', 'Java', 'Apache Camel', 'JUnit', 'Docker', 'SAP C4C'],
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
    technologies: ['React', 'JavaScript', 'Java', 'Hibernate', 'JBoss', 'Oracle SQL', 'Git', 'Cypress'],
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
    technologies: ['Oracle SQL', 'VBA'],
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