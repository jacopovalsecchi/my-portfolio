import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Invoice Automation Tool',
    company: 'Elixir Solutions',
    description:
      'Internal automation tool that generates invoices by synchronizing data between Teamwork and Odoo, eliminating manual data entry and reducing billing errors.',
    techStack: ['TypeScript', 'JavaScript', 'Teamwork', 'Odoo'],
  },
  {
    title: 'AI Upsell & Churn Agent',
    company: 'Elixir Solutions',
    description:
      'R&D project building an AI agent integrated with HubSpot to analyze upsell and cross-sell opportunities and detect churn risk using large language model inference.',
    techStack: ['Spring', 'React', 'Mistral AI', 'HubSpot', 'Java', 'GraphQL'],
  },
  {
    title: 'Credit Notes Creation Flow',
    company: 'KPMG Business Services',
    description:
        'Developed an end-to-end integration between an internal management tool and SAP, enabling accounting team to generate and manage credit notes directly from a React interface.',
    techStack: ['React', 'JavaScript', 'SAP API'],
  },
  {
    title: 'CI/CD Migration to Bitbucket Pipelines',
    company: 'KPMG Business Services',
    description:
        'Led the migration of the entire build and deployment process from Bamboo to Bitbucket Pipelines, reducing pipeline complexity and improving deployment reliability across multiple environments.',
    techStack: ['Bitbucket Pipelines', 'PowerShell'],
  },
]