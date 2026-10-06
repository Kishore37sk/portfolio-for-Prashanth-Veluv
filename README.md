# Prashanth Velu V — Portfolio

Personal portfolio for **Prashanth Velu V**, Digital Marketing & Business Analytics professional based in Coimbatore, India.

It is a single-page, editorial-style site. The visual identity comes from the printed resume: grey, charcoal and white, thin rules, serif headings and a circular portrait. It covers About, Expertise, Experience, Selected Projects, Education, the engineering-to-digital journey, and Contact.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | React 19, TypeScript, Vite 8 |
| Styling | Tailwind CSS 4, with design tokens in `src/styles/globals.css` |
| Motion | GSAP and ScrollTrigger for page-load and scroll animation; Framer Motion for small UI interactions |
| Icons | Lucide React |
| Fonts | Playfair Display and Inter, self-hosted through Fontsource |
| Backend | None. The contact form opens a pre-filled email, or posts to an optional form endpoint. |

React Icons was left out on purpose. Lucide covers every icon the site uses, so a second icon library would only add weight.

## Getting started

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check, build, prerender into dist/
npm run preview   # serve dist/ at http://localhost:4173
npm run lint
```

## How the build works

`npm run build` runs four steps:

1. `tsc -b` type-checks the project.
2. `vite build` builds the client. It has two entries: the app itself, and a tiny `hero-intro` entry that holds only GSAP core and the hero timeline.
3. `vite build --ssr src/entry-server.tsx` builds a server renderer.
4. `scripts/prerender.mjs` writes the fully rendered page into `dist/index.html` for SEO and fast first paint. It inlines the stylesheet and injects the `hero-intro` script as an async module, so the intro starts before React hydrates.

A small plugin in `vite.config.ts` also emits `robots.txt` and `sitemap.xml`. It fills every absolute URL (canonical, Open Graph, JSON-LD) from `VITE_SITE_URL`.

## Environment variables

Copy `.env.example` to `.env`, or set these in your hosting dashboard.

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_SITE_URL` | Recommended | Production URL without a trailing slash. Used for canonical, `og:url`, `og:image`, JSON-LD, robots.txt and sitemap.xml. It defaults to `https://prashanth-velu-v.vercel.app`, so **set it to the real domain**. |
| `VITE_CONTACT_ENDPOINT` | Optional | A URL that accepts a JSON `POST` of `{ name, email, message }`, such as Formspree or your own Express route. When set, the form sends messages and shows sending, sent and error states. When unset, the form opens the visitor's email app with the message drafted, and it never claims a message was sent. |

## Deployment

### Vercel

1. Import the repository. `vercel.json` already sets the build command, the `dist` output folder, and long-term caching for `/assets`.
2. Add `VITE_SITE_URL` under Project → Settings → Environment Variables.
3. Deploy.

### Netlify

1. Import the repository. `netlify.toml` sets `npm run build`, publishes `dist`, and pins Node 22.
2. Add `VITE_SITE_URL` under Site configuration → Environment variables.
3. Deploy. `public/_headers` adds immutable caching for hashed assets.

### Cloudflare Pages

Use build command `npm run build`, output directory `dist`, and add `VITE_SITE_URL`. `public/_headers` is supported here too.

## Editing content

All copy lives in `src/data/`, separate from the components.

| File | Contents |
| --- | --- |
| `site.ts` | Name, roles, contact details, navigation, About copy |
| `skills.ts` | The four expertise categories |
| `experience.ts` | Timeline entries |
| `projects.ts` | Case studies: summary, overview, scope, tags |
| `education.ts` | Education entries and the engineering-to-digital journey |

The Person JSON-LD and meta tags live in `index.html`. Update them there if the job title or description changes.

## Replacing assets

| File | Notes |
| --- | --- |
| `public/profile.jpg`, `profile.webp`, `profile.avif`, `profile-480.*` | Square portrait (800×800 and 480×480) cropped from the original photo. To replace it, export a square crop under the same file names. A source photo at least 800 px wide keeps it sharp. |
| `public/Prashanth-Velu-V-Resume.pdf` | Single-page PDF generated from the resume image. Replace it with the original PDF if one exists. |
| `public/og-image.png` (1200×630), `public/apple-touch-icon.png` (180×180) | Rendered from `scripts/og-image.html`. Run `npm run dev`, open `/scripts/og-image.html`, and screenshot `#og` and `#icon`. |
| `public/favicon.svg` | Monochrome "PV" mark. |

## Project structure

```
src/
├── components/   Section and UI components (Hero, Navbar, Experience, ProjectCard, …)
├── data/         All site content
├── hooks/        useScrollAnimation, useActiveSection, useMediaQuery
├── lib/          animations.ts (GSAP setup and reveals), heroIntro.ts (load timeline)
├── styles/       globals.css (tokens, base styles, utilities)
├── App.tsx
├── main.tsx          Client entry (hydrates the prerendered HTML)
├── hero-intro.ts     Early hero-animation entry
└── entry-server.tsx  Prerender entry
scripts/
├── prerender.mjs     Post-build prerender and inlining
└── og-image.html     Source for the social image and touch icon
```

## Motion, accessibility and performance

- **Reduced motion.** An inline script adds `motion-ok` to `<html>` only when the visitor allows motion. Every GSAP animation runs inside `gsap.matchMedia('(prefers-reduced-motion: no-preference)')`, Framer Motion uses `reducedMotion="user"`, and CSS animations are disabled. Without motion, all content renders fully visible.
- **Animation cost.** One-shot reveals use IntersectionObserver. ScrollTrigger is code-split and loads only for the two scrubbed sections, Experience and Journey. Each section sets up its animations only when it comes within half a viewport.
- **Code splitting.** Framer Motion, the mobile menu, the case-study panel and the custom cursor load on demand. The cursor loads only for fine pointers.
- **Accessibility.** The site has semantic landmarks, one H1 and an H2 per section, a skip link, and visible focus states. The keyboard-accessible mobile menu closes on Escape and returns focus. The case-study toggle sets `aria-expanded` and `aria-controls`, form errors are announced, and text colours meet WCAG AA.
