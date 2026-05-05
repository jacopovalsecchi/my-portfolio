export interface NavLink {
  label: string
  href: string
}

export interface HeroData {
  name: string
  role: string
  description: string
  cta: {
    primary: string
    secondary: string
  }
}

export interface Skill {
  name: string
  category: 'Frontend' | 'Backend' | 'Tools'
}

export interface Project {
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface Contact {
  email: string
  linkedIn: string
  github: string
}
