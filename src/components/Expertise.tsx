import { skillCategories } from '../data/skills'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { gsap, playOnView } from '../lib/animations'
import type { SkillCategory } from '../types'
import { SectionHeading } from './SectionHeading'

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <article
      data-skill-card
      aria-labelledby={`skill-${category.id}`}
      className="group/card relative flex flex-col border-b border-r border-line bg-surface p-6 sm:p-8 xl:p-9"
    >
      {/* Top rule draws across when the card is hovered or focused within. */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-ink transition-transform duration-700 ease-editorial group-hover/card:scale-x-100 group-focus-within/card:scale-x-100"
      />

      <div className="flex items-start justify-between">
        <span className="display text-[3.25rem] leading-none text-ink-4 transition-colors duration-500 group-hover/card:text-ink">
          {category.index}
        </span>
        <span className="eyebrow text-[0.625rem] text-ink-3">{category.skills.length} skills</span>
      </div>

      <h3
        id={`skill-${category.id}`}
        className="mt-8 font-display text-[1.6rem] leading-tight tracking-[-0.01em] text-ink"
      >
        {category.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-2">{category.summary}</p>

      <ul className="mt-8 border-t border-line">
        {category.skills.map((skill, i) => (
          <li
            key={skill}
            className="group/skill relative flex items-baseline justify-between gap-4 border-b border-line py-3 text-[0.9375rem] text-ink after:absolute after:-bottom-px after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-500 after:ease-editorial hover:after:scale-x-100"
          >
            <span className="transition-transform duration-500 ease-editorial group-hover/skill:translate-x-1.5">
              {skill}
            </span>
            {/* Index indicator: revealed on hover, always visible on touch screens. */}
            <span
              aria-hidden="true"
              className="eyebrow shrink-0 text-[0.625rem] text-ink-3 transition-[opacity,transform] duration-500 ease-editorial [@media(hover:hover)]:translate-x-1 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover/skill:translate-x-0 [@media(hover:hover)]:group-hover/skill:opacity-100"
            >
              {category.index}.{String(i + 1).padStart(2, '0')}
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export function Expertise() {
  const scope = useScrollAnimation<HTMLElement>((el) => {
    const cards = gsap.from(el.querySelectorAll('[data-skill-card]'), {
      y: 40,
      autoAlpha: 0,
      duration: 0.9,
      stagger: 0.1,
      paused: true,
    })
    return playOnView(el.querySelector('[data-skill-grid]'), cards)
  })

  return (
    <section
      ref={scope}
      id="expertise"
      aria-labelledby="expertise-title"
      className="section-pad scroll-mt-16 border-t border-line bg-surface-muted/60"
    >
      <div className="container-x">
        <SectionHeading
          index="02"
          label="Expertise"
          aside="Skills & tools"
          id="expertise-title"
          title={['Expertise']}
        />
        <p data-reveal className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">
          Four disciplines that work together: reaching people, understanding what works,
          automating the repeatable, and crafting what gets seen.
        </p>

        <div
          data-skill-grid
          className="mt-14 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 xl:grid-cols-4 md:mt-20"
        >
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
