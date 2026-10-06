import { projects } from '../data/projects'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { duration, ease, gsap, playOnView } from '../lib/animations'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  const scope = useScrollAnimation<HTMLElement>((el) => {
    const disposers = gsap.utils.toArray<HTMLElement>('[data-project-card]', el).map((card) => {
      const tl = gsap.timeline({ paused: true })
      tl.from(card, { y: 60, autoAlpha: 0, duration: duration.slow, ease: ease.expo }).fromTo(
        card.querySelector('[data-project-visual]'),
        { clipPath: 'inset(12% 12% 12% 12%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: ease.expo, clearProps: 'clipPath' },
        '<0.1',
      )
      return playOnView(card, tl)
    })
    return () => disposers.forEach((d) => d())
  })

  return (
    <section
      ref={scope}
      id="projects"
      aria-labelledby="projects-title"
      className="section-pad scroll-mt-16 border-t border-line bg-surface-muted/60"
    >
      <div className="container-x">
        <SectionHeading
          index="04"
          label="Projects"
          aside="Case studies"
          id="projects-title"
          title={['Selected', <span key="p" className="italic text-ink-4">projects</span>]}
        />
        <p data-reveal className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">
          Research, content and automation work across multiple brands. Open a project to see
          the full scope.
        </p>

        <div className="mt-14 flex flex-col gap-8 md:mt-20 md:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
