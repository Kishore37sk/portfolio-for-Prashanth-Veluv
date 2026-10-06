import { useEffect, useState } from 'react'
import { m, useMotionValue, useSpring } from 'framer-motion'
import { MotionProvider } from './MotionProvider'

type CursorState = 'default' | 'link' | 'project' | 'hidden'

const INTERACTIVE = 'a, button, [role="button"], summary, label[for]'
const TEXT_ENTRY = 'input, textarea, select, [contenteditable="true"]'

/**
 * A small difference-blended dot that grows over links, buttons and projects.
 * Mounted only for fine pointers with motion allowed (see App), so touch
 * devices and reduced-motion visitors keep the native cursor.
 */
export default function CustomCursor() {
  const [state, setState] = useState<CursorState>('hidden')
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('has-custom-cursor')

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target instanceof Element ? e.target : null
      let next: CursorState = 'default'
      if (target?.closest(TEXT_ENTRY)) next = 'hidden'
      else if (target?.closest('[data-cursor="project"]')) next = 'project'
      else if (target?.closest(INTERACTIVE)) next = 'link'
      setState((prev) => (prev === next ? prev : next))
    }
    const onLeave = () => setState('hidden')

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    return () => {
      root.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [x, y])

  const size = state === 'project' ? 84 : state === 'link' ? 44 : 10

  return (
    <MotionProvider>
      <m.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
        style={{ x: sx, y: sy }}
      >
        <m.div
          className="grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[0.5625rem] font-medium uppercase tracking-[0.2em] text-black"
          animate={{ width: size, height: size, opacity: state === 'hidden' ? 0 : 1 }}
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        >
          {state === 'project' ? <span>Open</span> : null}
        </m.div>
      </m.div>
    </MotionProvider>
  )
}
