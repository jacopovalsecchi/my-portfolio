export interface Experience {
  company: string
  location: string
  role: string
  period: {
    start: string
    end: string | null
  }
  description: string[]
  technologies?: string[]
}