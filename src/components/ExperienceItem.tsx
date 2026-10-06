import type { ExperienceEntry } from '../types'

interface ExperienceItemProps {
  entry: ExperienceEntry
  index: number
}

export function ExperienceItem({ entry, index }: ExperienceItemProps) {
  const [start, end] = entry.period.split(' — ')

  return (
    <li data-exp-item className="tl-item relative grid grid-cols-1 pb-16 last:pb-0 md:grid-cols-[24%_1fr] md:pb-24">
      {/* Timeline marker, centred on the vertical rule. */}
      <span
        aria-hidden="true"
        className="absolute left-[7px] top-[0.45rem] grid h-[15px] w-[15px] -translate-x-1/2 place-items-center rounded-full border border-ink bg-bg md:left-[24%] md:top-3"
      >
        <span className="tl-marker-dot block h-[7px] w-[7px] rounded-full bg-ink transition-transform duration-500 ease-editorial" />
      </span>

      {/* Period */}
      <div data-exp-year className="pl-10 md:pl-0 md:pr-12 md:text-right">
        <p className="display text-[clamp(2rem,4vw,3.25rem)] leading-none text-ink">
          {start}
          {end ? <span className="text-ink-4"> —</span> : null}
        </p>
        {end ? <p className="display mt-1 text-[clamp(1.25rem,2vw,1.6rem)] italic text-ink-3">{end}</p> : null}
        {entry.duration ? (
          <p className="eyebrow mt-4 text-ink-3">{entry.duration}</p>
        ) : null}
      </div>

      {/* Details */}
      <article className="mt-6 pl-10 md:mt-0 md:pl-14" aria-labelledby={`exp-${entry.id}`}>
        <p className="eyebrow text-ink-3">
          <span className="text-ink">{String(index + 1).padStart(2, '0')}</span>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          {entry.role}
        </p>
        <h3
          id={`exp-${entry.id}`}
          data-exp-company
          className="mt-3 font-display text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.015em] text-ink"
        >
          {entry.company}
        </h3>
        <p data-exp-fade className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-2">
          {entry.summary}
        </p>

        {entry.groups?.map((group) => (
          <div key={group.label} data-exp-fade className="mt-8">
            <p className="eyebrow mb-3 text-ink-3">{group.label}</p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-line bg-surface/60 px-3 py-1.5 text-[0.8125rem] text-ink transition-colors duration-300 hover:border-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {entry.responsibilities?.length ? (
          <ul className="mt-8 max-w-2xl border-t border-line">
            {entry.responsibilities.map((item, i) => (
              <li
                key={i}
                data-exp-resp
                className="flex gap-5 border-b border-line py-4 text-[0.9375rem] leading-relaxed text-ink-2"
              >
                <span className="eyebrow mt-1 shrink-0 text-[0.625rem] text-ink-3" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </li>
  )
}
