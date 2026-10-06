import type { ReactNode } from 'react'
import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion'

/**
 * Framer Motion is only used by code-split UI (mobile menu, case-study panel,
 * cursor), so each of those roots wraps itself in this provider. That keeps
 * the library out of the initial bundle. `reducedMotion="user"` honours the
 * visitor's OS setting.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
