import { duration, ease, gsap, MOTION_OK } from './animations'

/**
 * The hero's page-load sequence (GSAP timeline):
 * background → navigation → name, line by line → supporting copy →
 * portrait scale-in → drawn lines and circle → metadata → scroll cue.
 *
 * It runs on the prerendered DOM from a tiny separate entry (src/hero-intro.ts)
 * so it can start before React has downloaded and hydrated. The Hero component
 * also calls it as a fallback (dev mode, or if that entry did not run).
 * Calling it more than once is a no-op.
 */
export function playHeroIntro(): void {
  const root = document.documentElement
  const hero = document.getElementById('home')
  if (!hero || root.dataset.heroIntro) return
  root.dataset.heroIntro = 'played'

  const header = document.querySelector('[data-site-header]')
  const hidden = [...hero.querySelectorAll('[data-hero-hide]'), header]

  if (!window.matchMedia(MOTION_OK).matches) {
    gsap.set(hidden, { visibility: 'visible' })
    return
  }

  const q = gsap.utils.selector(hero)
  gsap.set(hidden, { visibility: 'visible' })

  // Absolute positions keep the choreography readable; text lands within ~1s.
  gsap
    .timeline({ defaults: { ease: ease.out } })
    .from(q('[data-hero-bg]'), { autoAlpha: 0, duration: 0.7 }, 0)
    .from(header, { y: -20, autoAlpha: 0, duration: duration.fast }, 0.1)
    .from(q('[data-hero-name] [data-line]'), { yPercent: 112, duration: 1.05, ease: ease.expo, stagger: 0.1 }, 0.15)
    .from(q('[data-hero-sub]'), { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.04 }, 0.3)
    .from(q('[data-hero-portrait]'), { scale: 0.95, autoAlpha: 0, duration: duration.slow, ease: ease.expo }, 0.3)
    .from(q('[data-hero-frame]'), { autoAlpha: 0, x: -10, y: -10, duration: duration.slow }, 0.5)
    .from(q('[data-hero-line-x]'), { scaleX: 0, duration: duration.slow, ease: ease.inOut }, 0.5)
    .from(q('[data-hero-line-y]'), { scaleY: 0, duration: duration.slow, ease: ease.inOut }, 0.6)
    .from(q('[data-hero-circle]'), { strokeDashoffset: 1, duration: 1.5, ease: ease.inOut }, 0.6)
    .from(q('[data-hero-meta]'), { autoAlpha: 0, y: 8, duration: duration.fast, stagger: 0.06 }, 0.9)
    .from(q('[data-hero-scroll]'), { autoAlpha: 0, y: 12, duration: duration.fast }, 1.2)
}
