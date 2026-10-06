import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { navItems, site } from '../data/site'

const disciplines = ['Digital Marketing', 'Business Analytics', 'Marketing Research']

export function Footer() {
  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    document.getElementById('main')?.focus({ preventScroll: true })
  }

  return (
    <footer className="bg-ink text-bg">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 border-t border-bg/20 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <p className="display text-[clamp(2rem,4vw,3rem)] uppercase tracking-[-0.01em]">{site.name}</p>
            <ul className="mt-5 space-y-1">
              {disciplines.map((d) => (
                <li key={d} className="eyebrow text-bg/70">
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="md:col-span-4 md:col-start-7">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="link-line eyebrow text-bg/80 hover:text-bg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2 md:text-right">
            <button
              type="button"
              onClick={toTop}
              className="eyebrow group inline-flex items-center gap-3 text-bg"
            >
              <span className="link-line">Back to top</span>
              <span className="relative grid h-9 w-9 place-items-center overflow-hidden border border-bg/40 transition-colors duration-500 group-hover:border-bg">
                <ArrowUp
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:-translate-y-8"
                />
                <ArrowUp
                  aria-hidden="true"
                  className="absolute h-4 w-4 translate-y-8 transition-transform duration-500 ease-editorial group-hover:translate-y-0"
                />
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-bg/20 py-8 text-xs text-bg/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.year} {site.name}. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a
              href={site.developer.url}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-1 text-bg"
            >
              <span className="link-line">{site.developer.name}</span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-3 w-3 transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
          <p className="eyebrow">{site.location}</p>
        </div>
      </div>
    </footer>
  )
}
