import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ContactForm } from './ContactForm'
import { SectionHeading } from './SectionHeading'

const details = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { label: 'Phone', value: site.phoneDisplay, href: site.phoneHref },
  { label: 'Location', value: site.location },
]

export function Contact() {
  const scope = useScrollAnimation<HTMLElement>()

  return (
    <section
      ref={scope}
      id="contact"
      aria-labelledby="contact-title"
      className="section-pad relative scroll-mt-16 overflow-hidden bg-ink text-bg"
    >
      {/* Large outlined circle echoing the hero portrait frame. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[20vw] -top-[20vw] h-[60vw] w-[60vw] rounded-full border border-bg/10"
      />
      <div className="container-x relative">
        <SectionHeading
          index="06"
          label="Contact"
          aside="Open to opportunities"
          tone="dark"
          id="contact-title"
          title={['Let’s build', 'something', <span key="m" className="italic text-bg/60">meaningful.</span>]}
          className="[&_h2]:text-[clamp(2.9rem,9vw,8.5rem)] [&_h2]:leading-[0.92]"
        />

        <div className="mt-14 grid grid-cols-1 gap-16 md:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p data-reveal className="max-w-md text-[1.125rem] leading-relaxed text-bg/80">
              Have a project, opportunity, or idea? Let’s connect and explore how digital strategy,
              research and technology can create measurable impact.
            </p>
            <div data-reveal className="mt-10 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="btn btn-invert">
                Email me
                <ArrowRight className="btn-icon btn-icon-x h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#contact-form" className="btn btn-invert-ghost">
                Let’s connect
                <ArrowRight className="btn-icon btn-icon-x h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <dl data-stagger className="mt-14 border-t border-bg/20">
              {details.map((d) => (
                <div
                  key={d.label}
                  data-stagger-item
                  className="flex flex-col gap-1 border-b border-bg/20 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="eyebrow text-bg/70">{d.label}</dt>
                  <dd className="min-w-0">
                    {d.href ? (
                      <a href={d.href} className="group inline-flex items-center gap-2 break-all text-[1.0625rem] text-bg">
                        <span className="link-line">{d.value}</span>
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    ) : (
                      <span className="text-[1.0625rem]">{d.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div data-reveal className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow mb-6 text-bg/70">Write to me</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
