import type { EducationEntry, JourneyStep } from '../types'

export const education: EducationEntry[] = [
  {
    id: 'kgisl',
    period: '2024',
    institution: 'KGiSL Micro College',
    qualification: 'Digital Marketing & Business Analytics',
    detail: 'Digital Communication and Media / Multimedia',
  },
  {
    id: 'srec',
    period: '2021 — 2024',
    institution: 'Sri Ramakrishna Engineering College',
    qualification: 'BE Civil Engineering',
  },
]

export const journey: JourneyStep[] = [
  { id: 'engineering', year: '2021', title: 'Engineering', note: 'BE Civil Engineering and structural work on a UBA check dam.' },
  { id: 'digital-support', year: '2022', title: 'Digital Support', note: 'A water management system for the Kovai Innovate program.' },
  { id: 'business-analysis', year: '2023', title: 'Business Analysis', note: 'Property loan processing at RPT Private Limited.' },
  { id: 'digital-marketing', year: '2024', title: 'Digital Marketing', note: 'Digital presence for leading brands at Promanage.biz.' },
  { id: 'marketing-research', year: '2025', title: 'Marketing Research', note: 'Research and content strategy across multiple brands.' },
  { id: 'gtm-automation', year: '2026', title: 'GTM Automation', note: 'AI-powered research and outreach with Clay.' },
]
