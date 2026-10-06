import { ArrowDown } from 'lucide-react'
import { experience } from '../data/experience'
import { site } from '../data/site'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { duration, ease, gsap, playOnView, type Dispose } from '../lib/animations'
import { ExperienceItem } from './ExperienceItem'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  const scope = useScrollAnimation<HTMLElement>((el, ScrollTrigger) => {
    const list = el.querySelector('[data-timeline]')
    if (!list || !ScrollTrigger) return

    // The ink rule grows with scroll progress through the list.
    gsap.fromTo(
      el.querySelector('[data-timeline-progress]'),
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: list, start: 'top 62%', end: 'bottom 62%', scrub: 0.4 },
      },
    )

    const disposers: Dispose[] = []
    gsap.utils.toArray<HTMLElement>('[data-exp-item]', el).forEach((item) => {
      // Marker expands while its entry crosses the reading line.
      ScrollTrigger.create({ trigger: item, start: 'top 62%', end: 'bottom 62%', toggleClass: 'is-active' })

      const tl = gsap.timeline({ paused: true, defaults: { ease: ease.out } })
      tl.from(item.querySelector('[data-exp-year]'), { x: -24, autoAlpha: 0, duration: duration.base })
        .fromTo(
          item.querySelector('[data-exp-company]'),
          { clipPath: 'inset(0 100% 0 0)' },
          { clipPath: 'inset(0 0% 0 0)', duration: duration.slow, ease: ease.expo },
          '-=0.6',
        )
        .from(item.querySelectorAll('[data-exp-fade]'), { y: 18, autoAlpha: 0, stagger: 0.08, duration: duration.fast }, '-=0.8')

      const responsibilities = item.querySelectorAll('[data-exp-resp]')
      if (responsibilities.length) {
        tl.from(responsibilities, { y: 16, autoAlpha: 0, stagger: 0.07, duration: duration.fast }, '-=0.4')
      }
      disposers.push(playOnView(item, tl, '0px 0px -20% 0px'))
    })
    return () => disposers.forEach((d) => d())
  }, { scrollTrigger: true })

  return (
    <section
      ref={scope}
      id="experience"
      aria-labelledby="experience-title"
      className="section-pad scroll-mt-16"
    >
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Experience"
          aside="2022 — Present"
          id="experience-title"
          title={['Experience']}
        />
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p data-reveal className="max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">
            From civil engineering sites to brand dashboards: a career built across engineering,
            analysis and digital marketing.
          </p>
          <a data-reveal href={site.resumePath} download className="btn btn-ghost self-start sm:self-auto">
            Download resume
            <ArrowDown className="btn-icon btn-icon-y h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="relative mt-16 md:mt-24">
          <span aria-hidden="true" className="absolute bottom-0 left-[7px] top-3 w-px bg-line-strong md:left-[24%]" />
          <span
            aria-hidden="true"
            data-timeline-progress
            className="absolute bottom-0 left-[7px] top-3 w-px origin-top bg-ink md:left-[24%]"
          />
          <ol data-timeline className="relative">
            {experience.map((entry, i) => (
              <ExperienceItem key={entry.id} entry={entry} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
