import { AnimatePresence, m } from 'framer-motion'
import type { Project } from '../types'
import { MotionProvider } from './MotionProvider'

interface CaseStudyDetailsProps {
  id: string
  open: boolean
  project: Project
}

/** Expandable case-study panel (code-split; loaded the first time a card is opened). */
export default function CaseStudyDetails({ id, open, project }: CaseStudyDetailsProps) {
  return (
    <MotionProvider>
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            id={id}
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-10 border-t border-line p-6 sm:p-10 lg:grid-cols-12 xl:p-14">
              <div className="lg:col-span-5">
                <p className="eyebrow text-ink-3">Overview</p>
                <p className="mt-4 font-display text-[1.35rem] leading-snug text-ink">{project.overview}</p>
              </div>
              <div className="lg:col-span-7">
                <p className="eyebrow text-ink-3">Scope of work</p>
                <ol className="mt-4 grid grid-cols-1 border-t border-line sm:grid-cols-2 sm:gap-x-8">
                  {project.scope.map((item, i) => (
                    <li
                      key={item}
                      className="flex gap-4 border-b border-line py-3 text-[0.9375rem] leading-snug text-ink-2"
                    >
                      <span aria-hidden="true" className="eyebrow mt-0.5 shrink-0 text-[0.625rem] text-ink-3">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </MotionProvider>
  )
}
