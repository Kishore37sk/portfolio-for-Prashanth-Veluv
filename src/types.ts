export interface NavItem {
  id: string
  label: string
}

export interface SkillCategory {
  id: string
  index: string
  title: string
  summary: string
  skills: string[]
}

export interface ExperienceEntry {
  id: string
  period: string
  duration?: string
  company: string
  role: string
  summary: string
  /** Optional named groups shown as hairline tag rows (e.g. brands, platforms). */
  groups?: { label: string; items: string[] }[]
  responsibilities?: string[]
}

export interface Project {
  id: string
  index: string
  year: string
  category: string
  title: string
  summary: string
  overview: string
  scope: string[]
  tags: string[]
  visual: 'network' | 'enrichment'
}

export interface EducationEntry {
  id: string
  period: string
  institution: string
  qualification: string
  detail?: string
}

export interface JourneyStep {
  id: string
  year: string
  title: string
  note: string
}
