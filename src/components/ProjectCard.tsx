import { lazy, Suspense, useId, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import type { Project } from '../types'
import { ProjectVisual } from './ProjectVisual'

interface ProjectCardProps {
  project: Project
  reversed?: boolean
}

// The detail panel (and Framer Motion) loads the first time a case study is opened.
const loadDetails = () => import('./CaseStudyDetails')
const CaseStudyDetails = lazy(loadDetails)

const edge = 'pointer-events-none absolute bg-ink transition-transform duration-700 ease-editorial'

export function ProjectCard({ project, reversed = false }: ProjectCardProps) {
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const detailsId = useId()

  return (
    <article data-project-card aria-labelledby={`project-${project.id}`} className="relative">
      <div className="group relative border border-line bg-surface transition-transform duration-700 ease-editorial hover:-translate-y-1.5 focus-within:-translate-y-1.5">
        {/* Border draws around the card on hover (each edge is its own line). */}
        <span aria-hidden="true" className={`${edge} -top-px left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100`} />
        <span aria-hidden="true" className={`${edge} -right-px top-0 h-full w-px origin-top scale-y-0 delay-100 group-hover:scale-y-100`} />
        <span aria-hidden="true" className={`${edge} -bottom-px right-0 h-px w-full origin-right scale-x-0 delay-200 group-hover:scale-x-100`} />
        <span aria-hidden="true" className={`${edge} -left-px bottom-0 h-full w-px origin-bottom scale-y-0 delay-300 group-hover:scale-y-100`} />

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Visual panel */}
          <div
            className={`relative overflow-hidden border-b border-line bg-sidebar/70 lg:col-span-5 lg:border-b-0 ${
              reversed ? 'lg:order-2 lg:border-l' : 'lg:border-r'
            }`}
          >
            <div aria-hidden="true" className="grid-texture absolute inset-0 opacity-50" />
            <div
              data-project-visual
              className="relative aspect-[4/3] p-8 transition-transform duration-[1.2s] ease-editorial group-hover:scale-[1.04] sm:p-12 lg:aspect-auto lg:h-full lg:min-h-[26rem]"
            >
              <ProjectVisual type={project.visual} />
            </div>
            <span className="eyebrow absolute bottom-4 left-5 text-[0.625rem] text-ink-2">Fig. {project.index}</span>
          </div>

          {/* Content */}
          <div className="flex flex-col p-6 sm:p-10 lg:col-span-7 xl:p-14">
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-baseline gap-5">
                <span className="display text-[clamp(2.75rem,5vw,4.5rem)] leading-none text-ink-4 transition-transform duration-700 ease-editorial group-hover:-translate-y-1 group-hover:translate-x-1.5 group-hover:text-ink">
                  {project.index}
                </span>
                <span className="eyebrow text-ink-3">{project.category}</span>
              </div>
              <span className="eyebrow shrink-0 border border-line px-2.5 py-1 text-ink">{project.year}</span>
            </div>

            <h3
              id={`project-${project.id}`}
              className="mt-10 font-display text-[clamp(1.85rem,3.6vw,3.25rem)] leading-[1.05] tracking-[-0.015em] text-ink lg:mt-auto lg:pt-12"
            >
              {project.title}
            </h3>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">{project.summary}</p>

            <ul className="mt-8 flex flex-wrap gap-x-2 gap-y-2" aria-label="Services">
              {project.tags.map((tag) => (
                <li key={tag} className="eyebrow border border-line px-2.5 py-1.5 text-[0.625rem] text-ink-2">
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-line pt-6">
              <button
                type="button"
                onClick={() => {
                  setLoaded(true)
                  setOpen((v) => !v)
                }}
                onPointerEnter={loadDetails}
                onFocus={loadDetails}
                aria-expanded={open}
                aria-controls={detailsId}
                data-cursor="project"
                className="eyebrow group/btn inline-flex items-center gap-4 text-ink"
              >
                <span className="link-line">{open ? 'Close case study' : 'View case study'}</span>
                <ArrowRight
                  aria-hidden="true"
                  className={`h-4 w-4 transition-transform duration-500 ease-editorial ${
                    open ? 'rotate-90' : 'group-hover:translate-x-1.5 group-hover/btn:translate-x-1.5'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {loaded ? (
          <Suspense fallback={null}>
            <CaseStudyDetails id={detailsId} open={open} project={project} />
          </Suspense>
        ) : null}
      </div>
    </article>
  )
}
