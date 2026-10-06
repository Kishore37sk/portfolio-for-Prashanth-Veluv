import { ArrowDown, ArrowRight } from 'lucide-react'
import { site } from '../data/site'
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect'
import { playHeroIntro } from '../lib/heroIntro'
import { AnimatedText } from './AnimatedText'
import { HeroPortrait } from './HeroPortrait'

const metaLabels = [
  { pos: 'left-5 top-6 lg:left-8 lg:top-28', text: <>Coimbatore / India</> },
  { pos: 'right-5 top-6 text-right lg:right-8 lg:top-28', text: <>11.01° N<br />76.95° E</> },
  { pos: 'bottom-6 left-5 lg:bottom-8 lg:left-8', text: <>Digital Marketing<br />Business Analytics</> },
  { pos: 'bottom-6 right-5 text-right lg:bottom-8 lg:right-8', text: <>Portfolio<br />{site.year}</> },
]

export function Hero() {
  // Normally already started by the separate hero-intro entry; this is the fallback.
  useIsomorphicLayoutEffect(playHeroIntro, [])

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden [container-type:inline-size] lg:grid lg:min-h-[100svh] lg:grid-cols-12"
    >
      {/* Left: name + positioning */}
      <div className="container-x relative flex flex-col pb-14 pt-28 sm:pt-32 lg:col-span-7 lg:max-w-none lg:justify-between lg:pb-12 lg:pr-12 lg:pt-36 lg:pl-container">
        <div>
          <div data-hero-hide data-hero-sub className="eyebrow mb-8 flex items-center gap-4 text-ink-3 lg:mb-12">
            <span className="h-px w-10 bg-ink-3" aria-hidden="true" />
            Personal portfolio — {site.year}
          </div>

          <AnimatedText
            as="h1"
            mode="manual"
            dataAttrs={['data-hero-name', 'data-hero-hide']}
            lines={[
              site.firstName,
              <span key="last" className="text-ink-4">
                {site.lastName}
              </span>,
            ]}
            className="display text-[clamp(2.25rem,13.6vw,7.5rem)] uppercase leading-[0.88] tracking-[-0.025em] lg:text-[min(8.2cqw,calc((100cqw/12_+_590px)/5.9))]"
          />

          <ul
            data-hero-hide
            className="mt-10 grid max-w-xl grid-cols-2 border-t border-line lg:mt-14"
            aria-label="Areas of focus"
          >
            {site.roles.map((role, i) => (
              <li
                key={role}
                data-hero-sub
                className={`flex items-baseline gap-3 border-b border-line py-3 ${i % 2 === 0 ? 'pr-4' : 'border-l pl-4'}`}
              >
                <span className="eyebrow text-[0.625rem] text-ink-3">0{i + 1}</span>
                <span className="eyebrow text-ink">{role}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 lg:mt-12">
          <p data-hero-hide data-hero-sub className="max-w-md text-[1.0625rem] leading-relaxed text-ink-2">
            {site.statement}
          </p>
          <div data-hero-hide data-hero-sub className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-solid">
              Selected work
              <ArrowRight className="btn-icon btn-icon-x h-4 w-4" aria-hidden="true" />
            </a>
            <a href={site.resumePath} download className="btn btn-ghost">
              Download resume
              <ArrowDown className="btn-icon btn-icon-y h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <a
          href="#about"
          data-hero-hide
          data-hero-scroll
          className="eyebrow absolute bottom-12 right-[clamp(1.25rem,5vw,5rem)] hidden items-center gap-4 text-ink-3 transition-colors hover:text-ink lg:right-12 lg:flex"
        >
          Scroll
          <span className="relative block h-12 w-px overflow-hidden bg-line" aria-hidden="true">
            <span className="animate-scroll-cue absolute inset-0 bg-ink" />
          </span>
        </a>
      </div>

      {/* Right: portrait panel in the resume's sidebar grey */}
      <div
        data-hero-hide
        data-hero-bg
        className="relative min-h-[34rem] overflow-hidden bg-sidebar sm:min-h-[40rem] lg:col-span-5 lg:min-h-0"
      >
        <div aria-hidden="true" className="grid-texture absolute inset-0 opacity-60" />
        <div className="absolute inset-0 grid place-items-center pt-6 lg:pt-10">
          <HeroPortrait />
        </div>
        {metaLabels.map((label, i) => (
          <p
            key={i}
            data-hero-meta
            className={`eyebrow absolute text-[0.625rem] leading-relaxed text-ink-2 ${label.pos}`}
          >
            {label.text}
          </p>
        ))}
      </div>
    </section>
  )
}
