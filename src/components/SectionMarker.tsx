import type { ReactNode } from 'react'

interface SectionMarkerProps {
  index?: string
  label: string
  aside?: ReactNode
  tone?: 'light' | 'dark'
}

/** "01 / LABEL" metadata row above a full-width hairline that draws on scroll. */
export function SectionMarker({ index, label, aside, tone = 'light' }: SectionMarkerProps) {
  const dark = tone === 'dark'
  return (
    <>
      <div
        className={`flex items-center justify-between gap-6 pb-4 ${dark ? 'text-bg/70' : 'text-ink-3'}`}
      >
        <p className="eyebrow">
          {index ? (
            <>
              <span className={dark ? 'text-bg' : 'text-ink'}>{index}</span>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
            </>
          ) : null}
          {label}
        </p>
        {aside ? <div className="eyebrow hidden sm:block">{aside}</div> : null}
      </div>
      <div
        data-reveal-rule
        aria-hidden="true"
        className={`h-px w-full ${dark ? 'bg-bg/25' : 'bg-line-strong'}`}
      />
    </>
  )
}
