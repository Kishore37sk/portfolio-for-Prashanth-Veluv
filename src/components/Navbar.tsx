import { lazy, Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { navItems, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navItems.map((n) => n.id)

// The menu (and Framer Motion with it) is fetched on demand, then kept mounted.
const loadMobileMenu = () => import('./MobileMenu')
const MobileMenu = lazy(loadMobileMenu)

export function Navbar() {
  const active = useActiveSection(sectionIds)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [menuLoaded, setMenuLoaded] = useState(false)
  const listRef = useRef<HTMLUListElement>(null)
  const indicatorRef = useRef<HTMLSpanElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Header changes appearance once the page leaves the very top.
  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 24))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Slide the hairline indicator under the active link (transform only).
  const placeIndicator = useCallback(() => {
    const list = listRef.current
    const bar = indicatorRef.current
    if (!list || !bar) return
    const link = list.querySelector<HTMLAnchorElement>(`a[data-id="${active}"]`)
    if (!link) {
      bar.style.opacity = '0'
      return
    }
    const listBox = list.getBoundingClientRect()
    const box = link.getBoundingClientRect()
    bar.style.opacity = '1'
    bar.style.width = `${box.width}px`
    bar.style.transform = `translateX(${box.left - listBox.left}px)`
  }, [active])

  useLayoutEffect(() => {
    placeIndicator()
    window.addEventListener('resize', placeIndicator)
    document.fonts?.ready.then(placeIndicator)
    return () => window.removeEventListener('resize', placeIndicator)
  }, [placeIndicator])

  // Mobile menu: lock scroll, close on Escape, return focus to the toggle.
  useEffect(() => {
    if (!open) return
    const toggle = toggleRef.current
    document.documentElement.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      toggle?.focus({ preventScroll: true })
    }
  }, [open])

  const close = () => setOpen(false)
  const toggleMenu = () => {
    setMenuLoaded(true)
    setOpen((v) => !v)
  }
  // Invert over the charcoal contact section + footer, except while the menu is open.
  const dark = active === 'contact' && !open

  return (
    <header
      data-site-header
      data-hero-hide
      data-tone={dark ? 'dark' : 'light'}
      className={`group/header fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,color] duration-500 ${
        dark
          ? 'border-bg/15 bg-ink/90 text-bg backdrop-blur-md'
          : scrolled
            ? 'border-line bg-bg/85 text-ink backdrop-blur-md'
            : 'border-transparent bg-bg text-ink'
      }`}
    >
      <div
        className={`container-x flex items-center justify-between transition-[height] duration-500 ease-editorial ${
          scrolled ? 'h-16' : 'h-[72px] lg:h-20'
        }`}
      >
        <a
          href="#home"
          onClick={close}
          className="group relative z-10 flex items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="grid h-10 w-10 place-items-center border border-current font-display text-[0.95rem] font-semibold tracking-tight transition-colors duration-500 group-hover:bg-ink group-hover:text-bg group-data-[tone=dark]/header:group-hover:bg-bg group-data-[tone=dark]/header:group-hover:text-ink">
            {site.initials}
          </span>
          <span className="eyebrow sr-only opacity-75 xl:not-sr-only">{site.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul ref={listRef} className="relative flex items-center gap-9">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-id={item.id}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`eyebrow block py-2 transition-opacity duration-300 hover:opacity-100 ${
                    active === item.id ? 'opacity-100' : 'opacity-70'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <span
              ref={indicatorRef}
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-px left-0 h-px w-0 bg-current opacity-0 transition-[transform,width,opacity] duration-500 ease-editorial"
            />
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`btn hidden min-h-10 px-5 py-2.5 sm:inline-flex ${dark ? 'btn-invert' : 'btn-solid'}`}
          >
            Let&rsquo;s talk
            <ArrowUpRight className="btn-icon btn-icon-x h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={toggleMenu}
            onPointerEnter={loadMobileMenu}
            onFocus={loadMobileMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative z-10 grid h-11 w-11 place-items-center border border-current/40 lg:hidden"
          >
            <span className="relative block h-3 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-500 ease-editorial ${
                  open ? 'translate-y-[5.5px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-500 ease-editorial ${
                  open ? '-translate-y-[5.5px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {menuLoaded ? (
        <Suspense fallback={null}>
          <MobileMenu open={open} active={active} onNavigate={close} />
        </Suspense>
      ) : null}
    </header>
  )
}
