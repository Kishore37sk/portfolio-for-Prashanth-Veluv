import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, CircleAlert, LoaderCircle } from 'lucide-react'
import { site } from '../data/site'

type Field = 'name' | 'email' | 'message'
type Values = Record<Field, string>
type Errors = Partial<Record<Field, string>>
type Status =
  | { kind: 'idle' }
  | { kind: 'submitting' }
  | { kind: 'sent' }
  | { kind: 'handoff' }
  | { kind: 'error'; message: string }

/** Optional JSON endpoint (Formspree, Getform, or an Express route). */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values: Values): Errors {
  const errors: Errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (values.message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.'
  return errors
}

function buildMailto({ name, email, message }: Values) {
  const subject = `Portfolio enquiry from ${name.trim()}`
  const body = `${message.trim()}\n\n—\n${name.trim()}\n${email.trim()}`
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const fields: { id: Field; label: string; type: string; autoComplete: string }[] = [
  { id: 'name', label: 'Your name', type: 'text', autoComplete: 'name' },
  { id: 'email', label: 'Email address', type: 'email', autoComplete: 'email' },
]

export function ContactForm() {
  const [values, setValues] = useState<Values>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  const update = (field: Field, value: string) => {
    setValues((v) => ({ ...v, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    const firstInvalid = (Object.keys(found) as Field[])[0]
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }

    if (!ENDPOINT) {
      // No backend configured: hand the drafted message to the visitor's mail app.
      window.location.href = buildMailto(values)
      setStatus({ kind: 'handoff' })
      return
    }

    setStatus({ kind: 'submitting' })
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      setStatus({ kind: 'sent' })
      setValues({ name: '', email: '', message: '' })
    } catch {
      setStatus({
        kind: 'error',
        message: `Your message could not be sent. Please try again, or email ${site.email} directly.`,
      })
    }
  }

  const submitting = status.kind === 'submitting'
  const inputBase =
    'peer w-full border-0 border-b bg-transparent px-0 pb-3 pt-7 text-[1.0625rem] text-bg placeholder-transparent outline-none transition-colors focus:border-bg focus-visible:outline-none'

  return (
    <form id="contact-form" noValidate onSubmit={onSubmit} aria-describedby="contact-form-note" className="scroll-mt-28">
      <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.id} className="relative">
            <input
              id={`contact-${f.id}`}
              name={f.id}
              type={f.type}
              autoComplete={f.autoComplete}
              placeholder={f.label}
              value={values[f.id]}
              onChange={(e) => update(f.id, e.target.value)}
              aria-invalid={errors[f.id] ? true : undefined}
              aria-describedby={errors[f.id] ? `contact-${f.id}-error` : undefined}
              className={`${inputBase} ${errors[f.id] ? 'border-bg' : 'border-bg/30'}`}
            />
            <label
              htmlFor={`contact-${f.id}`}
              className="eyebrow pointer-events-none absolute left-0 top-1 text-bg/70 transition-all"
            >
              {f.label}
            </label>
            <FieldError id={`contact-${f.id}-error`} message={errors[f.id]} />
          </div>
        ))}
      </div>

      <div className="relative mt-2">
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Tell me about your project"
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={`${inputBase} resize-y ${errors.message ? 'border-bg' : 'border-bg/30'}`}
        />
        <label htmlFor="contact-message" className="eyebrow pointer-events-none absolute left-0 top-1 text-bg/70">
          Project, opportunity or idea
        </label>
        <FieldError id="contact-message-error" message={errors.message} />
      </div>

      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={submitting} className="btn btn-invert disabled:opacity-60">
          {submitting ? (
            <>
              Sending
              <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
            </>
          ) : (
            <>
              {ENDPOINT ? 'Send message' : 'Compose email'}
              <ArrowRight className="btn-icon btn-icon-x h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
        <p id="contact-form-note" className="max-w-xs text-xs leading-relaxed text-bg/70">
          {ENDPOINT
            ? 'Your message is sent directly to my inbox.'
            : 'Opens your email app with the message drafted. Nothing is sent until you press send there.'}
        </p>
      </div>

      <div role="status" aria-live="polite" className="mt-6 min-h-6">
        {status.kind === 'sent' || status.kind === 'handoff' || status.kind === 'error' ? (
          <p key={status.kind} className="animate-fade-up flex items-start gap-3 text-sm leading-relaxed text-bg">
            {status.kind === 'error' ? (
              <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            ) : (
              <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            )}
            {status.kind === 'sent' && 'Thank you. Your message has been sent and I will get back to you soon.'}
            {status.kind === 'handoff' && (
              <span>
                Your email app should now be open with the message drafted. If nothing opened, write to{' '}
                <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                .
              </span>
            )}
            {status.kind === 'error' && status.message}
          </p>
        ) : null}
      </div>
    </form>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <p id={id} className="min-h-6 pt-1.5 text-xs text-bg" aria-live="off">
      {message ? (
        <span className="inline-flex items-center gap-1.5">
          <CircleAlert className="h-3.5 w-3.5" aria-hidden="true" />
          {message}
        </span>
      ) : null}
    </p>
  )
}
