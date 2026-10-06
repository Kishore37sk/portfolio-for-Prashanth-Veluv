import { gsap } from 'gsap'
import type { ScrollTrigger as ScrollTriggerType } from 'gsap/ScrollTrigger'

export type ScrollTriggerStatic = typeof ScrollTriggerType

/** Media query under which motion is allowed. Everything animated is gated by it. */
export const MOTION_OK = '(prefers-reduced-motion: no-preference)'

/** Shared easing + timing so every section moves with the same "voice". */
export const ease = {
  out: 'power3.out',
  expo: 'expo.out',
  inOut: 'power2.inOut',
} as const

export const duration = {
  fast: 0.6,
  base: 0.9,
  slow: 1.2,
} as const

/** Equivalent of ScrollTrigger's "top 85%": play once the element is 15% above the fold. */
const IN_VIEW_MARGIN = '0px 0px -15% 0px'

gsap.defaults({ ease: ease.out, duration: duration.base })

export { gsap }

let scrollTrigger: ScrollTriggerStatic | undefined
let scrollTriggerPromise: Promise<ScrollTriggerStatic> | undefined

/**
 * ScrollTrigger is only needed for scroll-scrubbed effects below the fold,
 * so it is code-split and loaded the first time such a section approaches.
 */
export function loadScrollTrigger(): Promise<ScrollTriggerStatic> {
  scrollTriggerPromise ??= import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
    gsap.registerPlugin(ScrollTrigger)
    scrollTrigger = ScrollTrigger
    return ScrollTrigger
  })
  return scrollTriggerPromise
}

/** Re-measures scroll triggers (e.g. after web fonts load) if any exist yet. */
export function refreshScrollTriggers() {
  scrollTrigger?.refresh()
}

export type Dispose = () => void

/**
 * Plays a (paused) animation the first time `trigger` enters the viewport.
 * One-shot reveals use IntersectionObserver rather than ScrollTrigger: no
 * layout reads on load or resize, which keeps the main thread free.
 */
export function playOnView(trigger: Element | null, animation: gsap.core.Animation, margin = IN_VIEW_MARGIN): Dispose {
  if (!trigger) {
    animation.progress(1)
    return () => {}
  }
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect()
        animation.play()
      }
    },
    { rootMargin: margin },
  )
  io.observe(trigger)
  return () => io.disconnect()
}

/** Shared reveal for `[data-reveal]`, `[data-reveal-text]`, `[data-reveal-rule]` and `[data-stagger]`. */
export function revealChildren(scope: HTMLElement): Dispose {
  const disposers: Dispose[] = []
  const each = (selector: string, fn: (el: HTMLElement) => void) =>
    gsap.utils.toArray<HTMLElement>(selector, scope).forEach(fn)

  each('[data-reveal]', (el) => {
    const tween = gsap.from(el, {
      y: 28,
      autoAlpha: 0,
      delay: Number(el.dataset.revealDelay ?? 0),
      paused: true,
    })
    disposers.push(playOnView(el, tween))
  })

  // Line-by-line text reveal: each `[data-line]` sits in an overflow-hidden mask.
  each('[data-reveal-text]', (el) => {
    const tween = gsap.from(el.querySelectorAll('[data-line]'), {
      yPercent: 110,
      duration: duration.slow,
      ease: ease.expo,
      stagger: 0.09,
      paused: true,
    })
    disposers.push(playOnView(el, tween))
  })

  // Hairline rules draw from the left.
  each('[data-reveal-rule]', (el) => {
    const tween = gsap.from(el, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: duration.slow,
      ease: ease.inOut,
      paused: true,
    })
    disposers.push(playOnView(el, tween, '0px 0px -8% 0px'))
  })

  // Groups whose `[data-stagger-item]` children cascade in.
  each('[data-stagger]', (group) => {
    const tween = gsap.from(group.querySelectorAll('[data-stagger-item]'), {
      y: 24,
      autoAlpha: 0,
      duration: duration.fast,
      stagger: 0.07,
      paused: true,
    })
    disposers.push(playOnView(group, tween))
  })

  return () => disposers.forEach((d) => d())
}
