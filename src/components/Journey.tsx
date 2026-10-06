import { journey } from '../data/education'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { gsap } from '../lib/animations'
import { SectionHeading } from './SectionHeading'

export function Journey() {
  const scope = useScrollAnimation<HTMLElement>((el, ScrollTrigger) => {
    if (!ScrollTrigger) return
    const track = el.querySelector('[data-journey-track]')
    const steps = gsap.utils.toArray<HTMLElement>('[data-journey-step]', el)

    // One scrubbed timeline: the rule draws while each step lights up in turn.
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: track, start: 'top 75%', end: 'bottom 45%', scrub: 0.6 },
    })
    tl.fromTo(el.querySelector('[data-journey-line-x]'), { scaleX: 0 }, { scaleX: 1, duration: steps.length }, 0)
    tl.fromTo(el.querySelector('[data-journey-line-y]'), { scaleY: 0 }, { scaleY: 1, duration: steps.length }, 0)
    steps.forEach((step, i) => {
      tl.from(step.querySelectorAll('[data-journey-fade]'), { autoAlpha: 0.15, y: 14, duration: 0.6, stagger: 0.1 }, i * 0.9)
      tl.from(step.querySelector('[data-journey-dot]'), { scale: 0, duration: 0.4 }, i * 0.9)
    })
  }, { scrollTrigger: true })

  return (
    <section
      ref={scope}
      id="journey"
      aria-labelledby="journey-title"
      className="section-pad relative scroll-mt-16 overflow-hidden bg-sidebar"
    >
      <div aria-hidden="true" className="grid-texture absolute inset-0 opacity-25" />
      <div className="container-x relative">
        <SectionHeading
          label="Interlude — The journey"
          aside="2021 → 2026"
          id="journey-title"
          title={['From engineering', <span key="d" className="italic">to digital growth</span>]}
        />
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <p data-reveal className="font-display text-[clamp(1.25rem,2vw,1.6rem)] leading-snug text-ink lg:col-span-7">
            My journey combines engineering discipline, business analysis, digital operations and
            marketing strategy.
          </p>
          <p data-reveal data-reveal-delay="0.1" className="text-[1.0625rem] leading-relaxed text-ink-2 lg:col-span-4 lg:col-start-9">
            This cross-functional background lets me approach digital challenges with both
            analytical thinking and creative problem-solving.
          </p>
        </div>

        <div data-journey-track className="relative mt-16 md:mt-24">
          {/* Horizontal rule (desktop) and vertical rule (mobile/tablet). */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-[3.1rem] hidden h-px bg-ink/20 lg:block" />
          <span aria-hidden="true" data-journey-line-x className="absolute left-0 right-0 top-[3.1rem] hidden h-px origin-left bg-ink lg:block" />
          <span aria-hidden="true" className="absolute bottom-4 left-[5px] top-2 w-px bg-ink/20 lg:hidden" />
          <span aria-hidden="true" data-journey-line-y className="absolute bottom-4 left-[5px] top-2 w-px origin-top bg-ink lg:hidden" />

          <ol className="relative grid grid-cols-1 gap-10 lg:grid-cols-6 lg:gap-6">
            {journey.map((step, i) => (
              <li key={step.id} data-journey-step className="relative pl-10 lg:pl-0">
                <p data-journey-fade className="eyebrow text-ink-2 lg:h-8">
                  {step.year}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 grid h-[11px] w-[11px] place-items-center rounded-full border border-ink bg-sidebar lg:static lg:mt-[0.8rem]"
                >
                  <span data-journey-dot className="block h-[5px] w-[5px] rounded-full bg-ink" />
                </span>
                <p data-journey-fade aria-hidden="true" className="eyebrow mt-3 text-[0.625rem] text-ink-2 lg:mt-8">
                  Step {String(i + 1).padStart(2, '0')}
                  <span className="ml-2">{i < journey.length - 1 ? '→' : ''}</span>
                </p>
                <h3 data-journey-fade className="mt-2 font-display text-[1.6rem] leading-[1.1] text-ink lg:text-[clamp(1.25rem,1.6vw,1.6rem)]">
                  {step.title}
                </h3>
                <p data-journey-fade className="mt-3 max-w-xs text-sm leading-relaxed text-ink-2">
                  {step.note}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
