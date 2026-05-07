import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Invoice Automation Tool',
    description:
      'Internal automation tool that generates invoices by synchronizing data between Teamwork and Odoo, eliminating manual data entry and reducing billing errors.',
    techStack: ['TypeScript', 'JavaScript', 'Teamwork', 'Odoo'],
  },
  {
    title: 'AI Upsell & Churn Agent',
    description:
      'R&D project building an AI agent integrated with HubSpot to analyze upsell and cross-sell opportunities and detect churn risk using large language model inference.',
    techStack: ['Spring', 'Mistral AI', 'HubSpot', 'Java', 'GraphQL'],
  },
]