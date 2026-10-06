import type { ElementType, ReactNode } from 'react'

interface AnimatedTextProps {
  /** Each entry renders as its own masked line. */
  lines: ReactNode[]
  as?: ElementType
  className?: string
  lineClassName?: string
  id?: string
  /**
   * `scroll` registers the block for the shared scroll reveal.
   * `manual` leaves the `[data-line]` spans for a parent timeline (e.g. the hero).
   */
  mode?: 'scroll' | 'manual'
  /** Extra boolean data attributes for the outer element, e.g. hooks for a timeline. */
  dataAttrs?: string[]
}

/**
 * Splits a heading into masked lines so each line can slide up from behind
 * its own clip. Text stays a single readable string for assistive tech.
 */
export function AnimatedText({
  lines,
  as: Tag = 'p',
  className,
  lineClassName,
  id,
  mode = 'scroll',
  dataAttrs = [],
}: AnimatedTextProps) {
  const dataProps: Record<string, string> = {}
  if (mode === 'scroll') dataProps['data-reveal-text'] = ''
  for (const attr of dataAttrs) dataProps[attr] = ''

  return (
    <Tag id={id} className={className} {...dataProps}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <span data-line className={`block ${lineClassName ?? ''}`}>
            {line}
            {/* Keep words separated for screen readers when lines are concatenated. */}
            {i < lines.length - 1 && <span className="sr-only"> </span>}
          </span>
        </span>
      ))}
    </Tag>
  )
}
