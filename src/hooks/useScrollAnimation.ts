import { useRef, type RefObject } from 'react'
import {
  gsap,
  loadScrollTrigger,
  MOTION_OK,
  revealChildren,
  type Dispose,
  type ScrollTriggerStatic,
} from '../lib/animations'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

/** `ScrollTrigger` is provided only to sections that ask for it (it is loaded on demand). */
type Setup = (scope: HTMLElement, ScrollTrigger: ScrollTriggerStatic | null) => void | Dispose

interface Options {
  /** Apply the shared `[data-reveal*]` / `[data-stagger]` reveals. Default: true. */
  reveal?: boolean
  /**
   * Defer all GSAP work until the section is about half a viewport away.
   * Keeps the main thread free during load. Default: true.
   */
  lazy?: boolean
  /** Load ScrollTrigger before setup (for scroll-scrubbed effects). Default: false. */
  scrollTrigger?: boolean
}

/**
 * Runs GSAP animations scoped to `scope`, only when the visitor allows motion.
 * Everything created inside is reverted automatically on unmount or when the
 * reduced-motion preference changes, so content is always left visible.
 */
export function useScrollAnimation<T extends HTMLElement>(
  setup?: Setup,
  { reveal = true, lazy = true, scrollTrigger = false }: Options = {},
): RefObject<T | null> {
  const scope = useRef<T>(null)
  // Keep the latest setup without re-running the effect on every render.
  const setupRef = useRef(setup)
  useIsomorphicLayoutEffect(() => {
    setupRef.current = setup
  })

  useIsomorphicLayoutEffect(() => {
    const el = scope.current
    if (!el || !window.matchMedia(MOTION_OK).matches) return

    let mm: gsap.MatchMedia | undefined
    let disposed = false

    const start = (alreadyVisible: boolean, ScrollTrigger: ScrollTriggerStatic | null) => {
      if (disposed) return
      mm = gsap.matchMedia()
      mm.add(
        MOTION_OK,
        () => {
          // A section that is already on screen (e.g. after an anchor jump) is
          // left as-is rather than hidden and re-revealed.
          const stopReveal = reveal && !alreadyVisible ? revealChildren(el) : undefined
          const stopSetup = setupRef.current?.(el, ScrollTrigger)
          return () => {
            stopReveal?.()
            if (typeof stopSetup === 'function') stopSetup()
          }
        },
        el,
      )
    }

    if (!lazy) {
      start(false, null)
      return () => mm?.revert()
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        io.disconnect()
        // Visibility is measured right before anything would be hidden.
        const isOnScreen = () => el.getBoundingClientRect().top < window.innerHeight * 0.85
        if (scrollTrigger) loadScrollTrigger().then((st) => start(isOnScreen(), st))
        else start(isOnScreen(), null)
      },
      { rootMargin: '50% 0px 50% 0px' },
    )
    io.observe(el)
    return () => {
      disposed = true
      io.disconnect()
      mm?.revert()
    }
  }, [reveal, lazy, scrollTrigger])

  return scope
}
