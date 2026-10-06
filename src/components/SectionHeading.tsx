import type { ReactNode } from 'react'
import { AnimatedText } from './AnimatedText'
import { SectionMarker } from './SectionMarker'

interface SectionHeadingProps {
  /** Section number such as "01". Omit for unnumbered interludes. */
  index?: string
  label: string
  /** Heading lines; each animates as its own masked line. */
  title: ReactNode[]
  id: string
  aside?: ReactNode
  tone?: 'light' | 'dark'
  className?: string
}

/**
 * Editorial section opener: a full-width hairline with "01 / LABEL" metadata,
 * followed by a large serif H2 — a direct nod to the resume's ruled headings.
 */
export function SectionHeading({
  index,
  label,
  title,
  id,
  aside,
  tone = 'light',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <SectionMarker index={index} label={label} aside={aside} tone={tone} />
      <AnimatedText
        as="h2"
        id={id}
        lines={title}
        className={`display mt-8 text-[clamp(2.6rem,7vw,6.25rem)] md:mt-12 ${
          tone === 'dark' ? 'text-bg' : 'text-ink'
        }`}
      />
    </div>
  )
}
