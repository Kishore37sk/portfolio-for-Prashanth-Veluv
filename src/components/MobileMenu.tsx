import { useEffect, useRef } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { navItems, site } from '../data/site'
import { MotionProvider } from './MotionProvider'

interface MobileMenuProps {
  open: boolean
  active: string
  onNavigate: () => void
}

const easeOut = [0.22, 1, 0.36, 1] as const

/** Full-screen editorial menu for small screens, animated with Framer Motion. */
export default function MobileMenu({ open, active, onNavigate }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  // Move focus into the menu when it opens.
  useEffect(() => {
    if (open) menuRef.current?.querySelector<HTMLElement>('a')?.focus()
  }, [open])

  return (
    <MotionProvider>
      <AnimatePresence>
        {open && (
          <m.div
            ref={menuRef}
            id="mobile-menu"
            key="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="fixed inset-x-0 top-0 flex h-[100svh] flex-col bg-bg pt-24 text-ink lg:hidden"
          >
            <nav aria-label="Mobile" className="container-x flex flex-1 flex-col">
              <ul className="border-t border-line">
                {navItems.map((item, i) => (
                  <m.li
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12, transition: { duration: 0.2 } }}
                    transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: easeOut }}
                    className="border-b border-line"
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={onNavigate}
                      aria-current={active === item.id ? 'true' : undefined}
                      className="flex items-baseline justify-between py-4"
                    >
                      <span className="display text-[clamp(2rem,9vw,3.25rem)]">{item.label}</span>
                      <span className="eyebrow text-ink-3">0{i + 1}</span>
                    </a>
                  </m.li>
                ))}
              </ul>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                exit={{ opacity: 0 }}
                className="mt-auto flex flex-col gap-2 pb-10 pt-8 text-sm text-ink-2"
              >
                <a href={`mailto:${site.email}`} className="break-all">
                  {site.email}
                </a>
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
                <span className="eyebrow mt-3 text-ink-3">{site.location}</span>
              </m.div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </MotionProvider>
  )
}
