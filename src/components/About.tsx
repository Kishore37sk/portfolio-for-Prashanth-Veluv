import { aboutCopy } from '../data/site'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { AnimatedText } from './AnimatedText'
import { SectionMarker } from './SectionMarker'

export function About() {
  const scope = useScrollAnimation<HTMLElement>()

  return (
    <section
      ref={scope}
      id="about"
      aria-labelledby="about-title"
      className="section-pad relative scroll-mt-16"
    >
      <div className="container-x">
        <SectionMarker index="01" label="About" aside="Profile" />

        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 lg:grid-cols-12 lg:gap-8">
          {/* Large stacked title — the editorial "masthead" of the section. */}
          <div className="lg:col-span-4">
            <AnimatedText
              as="h2"
              id="about-title"
              lines={['About', <span key="me" className="italic text-ink-4">me</span>]}
              className="display text-[clamp(3.5rem,15vw,7rem)] uppercase leading-[0.85] lg:sticky lg:top-32 lg:text-[min(7.2vw,8.5rem)]"
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p
              data-reveal
              className="font-display text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.3] tracking-[-0.01em] text-ink"
            >
              {aboutCopy.lead}
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 text-[1.0625rem] leading-relaxed text-ink-2 md:grid-cols-2 md:gap-10">
              {aboutCopy.body.map((para, i) => (
                <p key={i} data-reveal data-reveal-delay={i * 0.08}>
                  {para}
                </p>
              ))}
            </div>

            <dl data-stagger className="mt-14 grid grid-cols-1 border-t border-line sm:grid-cols-3">
              {aboutCopy.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  data-stagger-item
                  className={`border-b border-line py-5 sm:border-b-0 ${i > 0 ? 'sm:border-l sm:pl-6' : ''} sm:pr-4`}
                >
                  <dt className="eyebrow text-ink-3">{fact.label}</dt>
                  <dd className="mt-2 text-[0.9375rem] leading-snug text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Highlights — six disciplines on a ruled grid. */}
        <div className="mt-20 md:mt-28">
          <p className="eyebrow mb-5 text-ink-3">Professional focus</p>
          <ul
            data-stagger
            className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3"
          >
            {aboutCopy.highlights.map((item, i) => (
              <li
                key={item}
                data-stagger-item
                className="group relative flex items-baseline justify-between gap-6 overflow-hidden border-b border-r border-line px-5 py-7 md:px-7 md:py-9"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-bottom scale-y-0 bg-surface transition-transform duration-700 ease-editorial group-hover:scale-y-100"
                />
                <span className="relative display text-[clamp(1.5rem,2.4vw,2rem)] transition-transform duration-700 ease-editorial group-hover:translate-x-1.5">
                  {item}
                </span>
                <span className="eyebrow relative text-ink-3">0{i + 1}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
