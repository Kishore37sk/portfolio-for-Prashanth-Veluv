import type { NavItem } from '../types'

export const site = {
  name: 'Prashanth Velu V',
  firstName: 'Prashanth',
  lastName: 'Velu V',
  initials: 'PV',
  jobTitle: 'Digital Marketing & Business Analytics Professional',
  roles: ['Digital Marketing', 'Business Analyst', 'Marketing Research', 'GTM Automation'],
  statement:
    'Building meaningful digital experiences through marketing strategy, analytics, research and technology.',
  location: 'Coimbatore, India',
  email: 'prashanthvelu0409@gmail.com',
  phoneDisplay: '+91 94869 72766',
  phoneHref: 'tel:+919486972766',
  resumePath: '/Prashanth-Velu-V-Resume.pdf',
  year: 2026,
  /** Site credit shown in the footer. */
  developer: { name: 'Kishore Kumar', url: 'https://kishore37sk.github.io/personal_website/' },
} as const

/** Order mirrors the order of sections on the page so the indicator travels one way. */
export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const aboutCopy = {
  lead:
    'I work to improve the quality of life in the communities around me, using a deep, hands-on knowledge of digital marketing and the technical skills behind it.',
  body: [
    'Working closely with diverse, cross-functional teams, I set out to deliver innovative, efficient projects that create meaningful and lasting impact.',
    'I believe digital marketing can bring optimism and confidence to shaping a better future, and I use these skills with purpose to drive positive change, both professionally and in the communities I serve.',
  ],
  highlights: [
    'Digital Marketing',
    'Marketing Research',
    'Business Analysis',
    'GTM Automation',
    'Digital Presence',
    'Content Strategy',
  ],
  facts: [
    { label: 'Currently', value: 'Digital Customer Executive, Promanage.biz' },
    { label: 'Based in', value: 'Coimbatore, India' },
    { label: 'Background', value: 'BE Civil Engineering' },
  ],
} as const
