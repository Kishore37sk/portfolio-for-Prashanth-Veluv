import { education } from '../data/education'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { SectionHeading } from './SectionHeading'

export function Education() {
  const scope = useScrollAnimation<HTMLElement>()

  return (
    <section
      ref={scope}
      id="education"
      aria-labelledby="education-title"
      className="section-pad scroll-mt-16"
    >
      <div className="container-x">
        <SectionHeading
          index="05"
          label="Education"
          aside="2021 — 2024"
          id="education-title"
          title={['Education']}
        />

        <ol data-stagger className="mt-14 grid grid-cols-1 border-l border-t border-line md:mt-20 md:grid-cols-2">
          {education.map((entry, i) => (
            <li
              key={entry.id}
              data-stagger-item
              className="group relative overflow-hidden border-b border-r border-line bg-surface p-6 sm:p-10 xl:p-14"
            >
              {/* Oversized index set behind the content, like a folio number. */}
              <span
                aria-hidden="true"
                className="display pointer-events-none absolute -right-2 -top-6 text-[9rem] leading-none text-ink/[0.05] transition-transform duration-1000 ease-editorial group-hover:-translate-x-3 sm:text-[12rem]"
              >
                0{i + 1}
              </span>

              <article aria-labelledby={`edu-${entry.id}`} className="relative flex h-full flex-col">
                <p className="eyebrow text-ink-3">
                  <span className="text-ink">{entry.period}</span>
                </p>
                <h3
                  id={`edu-${entry.id}`}
                  className="mt-10 font-display text-[clamp(1.75rem,3vw,2.6rem)] leading-[1.08] tracking-[-0.015em] text-ink md:mt-16"
                >
                  {entry.qualification}
                </h3>
                <div className="mt-auto pt-10">
                  <div className="h-px w-12 bg-ink transition-[width] duration-700 ease-editorial group-hover:w-24" aria-hidden="true" />
                  <p className="mt-5 text-[1.0625rem] font-medium text-ink">{entry.institution}</p>
                  {entry.detail ? <p className="mt-1 text-[0.9375rem] text-ink-2">{entry.detail}</p> : null}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
