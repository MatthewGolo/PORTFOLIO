export interface Skill {
  name: string
  level: number
}

export interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  link?: string
  github?: string
}
