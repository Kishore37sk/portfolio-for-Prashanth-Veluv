You are a senior frontend engineer, UI/UX designer, motion designer, SEO specialist, and web performance engineer.

I want you to build a complete, production-ready personal portfolio website based on the resume provided below.

Do NOT create a generic developer portfolio.

The person is primarily a DIGITAL MARKETING / BUSINESS ANALYTICS professional with experience in digital presence management, marketing research, content strategy, social media marketing, GTM automation, Google Business Profile, Meta Business Suite, SEO, SEM, SMM, analytics, and business analysis.

The website should feel like a premium modern personal brand website while still looking professional and corporate.

==================================================
1. PRIMARY OBJECTIVE
==================================================

Build a highly polished personal portfolio website for:

PRASHANTH VELUV

Professional positioning:

Digital Marketing | Business Analyst | Marketing Research | GTM Automation | Digital Presence Management

The website should communicate:

- Professionalism
- Creativity
- Digital marketing expertise
- Business/analytical thinking
- Technical capability
- Attention to detail
- Leadership
- Modern digital presence
- Strong personal branding

The website should be impressive enough to show to:

- Recruiters
- Hiring managers
- Marketing agencies
- Startups
- Business owners
- Clients
- Digital marketing teams
- Analytics teams

==================================================
2. TECHNOLOGY STACK
==================================================

Use:

Frontend:
- React
- Vite
- TypeScript
- Tailwind CSS

Animations:
- GSAP
- GSAP ScrollTrigger
- Framer Motion where appropriate

Icons:
- Lucide React
- React Icons

Backend:
- Not required initially.

If a backend is required for contact form submission, use:
- Node.js
- Express.js

Prefer a static frontend architecture unless a backend is genuinely necessary.

Use modern React architecture.

Do NOT use unnecessary libraries.

The final application must be:

- Fast
- Responsive
- Accessible
- SEO-friendly
- Maintainable
- Component-based
- Production-ready
- Easy to deploy on Vercel/Netlify/Cloudflare Pages

==================================================
3. IMPORTANT DESIGN DIRECTION
==================================================

The uploaded resume image is the visual reference.

Study the resume carefully before implementing the UI.

The website must take visual inspiration from the resume's:

- Grey background
- Charcoal/dark grey typography
- Black text
- White/light-grey content surfaces
- Thin divider lines
- Editorial typography
- Minimal professional layout
- Circular profile photo treatment
- Structured two-column resume design

However:

DO NOT simply turn the resume into a webpage.

Instead, transform the resume's visual identity into a premium interactive portfolio.

The website should feel like:

"Modern editorial portfolio + premium corporate website + digital marketing personal brand"

Avoid:

- Generic blue gradient portfolio
- Neon colors
- Excessive glassmorphism
- Cyberpunk design
- Overly colorful UI
- Generic developer landing page
- Excessive rounded cards
- Excessive shadows
- Template-looking design

==================================================
4. COLOR SYSTEM
==================================================

Use a restrained monochromatic palette inspired by the resume.

Suggested CSS variables:

--background: #f3f3f1
--surface: #ffffff
--surface-muted: #e5e5e3
--sidebar: #c9c9c9
--text-primary: #222222
--text-secondary: #5a5a5a
--text-muted: #858585
--border: #999999
--accent: #333333
--accent-light: #d8d8d6
--white: #ffffff

You may slightly adjust these colors if needed to improve accessibility and visual hierarchy.

Do NOT introduce bright colors unless absolutely necessary.

The entire website should feel monochromatic, sophisticated, elegant, and editorial.

==================================================
5. TYPOGRAPHY
==================================================

Use typography that resembles the resume but modernize it.

Possible combination:

Headings:
- Playfair Display
OR
- Cormorant Garamond
OR
- Libre Baskerville

Body:
- Inter
OR
- Manrope
OR
- DM Sans

Use serif typography for major editorial headings and clean sans-serif typography for body content.

The combination should create:

Editorial + Corporate + Modern

Do not use too many fonts.

Maximum:
- 1 display font
- 1 body font

==================================================
6. OVERALL PAGE EXPERIENCE
==================================================

The site should be a SINGLE-PAGE portfolio with smooth scrolling.

Recommended sections:

1. Navigation
2. Hero
3. About
4. Expertise / Skills
5. Experience
6. Selected Projects
7. Education
8. Career Timeline
9. Contact
10. Footer

Optional:
- Resume download
- Social links
- Project details modal/page

Navigation should smoothly scroll to each section.

On mobile, use an elegant hamburger menu.

==================================================
7. HERO SECTION
==================================================

Create a visually impressive hero section.

Desktop layout:

LEFT:
Large typography:

PRASHANTH
VELUV

Below:

DIGITAL MARKETING
BUSINESS ANALYST
MARKETING RESEARCH
GTM AUTOMATION

Then a short statement:

"Building meaningful digital experiences through marketing strategy, analytics, research and technology."

RIGHT:

Use the profile image from the resume as the primary portrait.

Do NOT make the image look like a standard circular profile picture only.

Create a refined editorial composition inspired by the resume:

- Large circular portrait
- Thin border
- subtle offset frame
- subtle grayscale treatment
- small metadata labels
- elegant geometric lines

Example decorative information:

COIMBATORE / INDIA

DIGITAL MARKETING
BUSINESS ANALYTICS

2026

Add a subtle animated line/grid around the portrait.

Hero animation:

On page load:

1. Background appears
2. Navigation fades in
3. Name reveals line-by-line
4. Subtitle slides upward
5. Profile image scales from 0.95 to 1
6. Decorative lines animate
7. Scroll indicator appears

Use GSAP for the primary hero animation.

Keep animation smooth and sophisticated.

Do NOT make it flashy.

==================================================
8. NAVIGATION
==================================================

Create a sticky/floating navigation.

Desktop:

Logo:
PV

Navigation:

HOME
ABOUT
EXPERIENCE
PROJECTS
SKILLS
CONTACT

Add:

"LET'S TALK"

button.

Navigation should:

- Change appearance when scrolling
- Use backdrop blur subtly
- Have thin border
- Maintain monochromatic color scheme
- Animate active section indicator

Mobile:

Use hamburger menu.

Menu should animate with Framer Motion.

==================================================
9. ABOUT SECTION
==================================================

Create an editorial-style About section.

Headline:

ABOUT ME

Use this information from the resume:

"I aim to enhance the overall quality of life within the community by leveraging my comprehensive knowledge and technical expertise in digital marketing. By collaborating closely with diverse, cross-functional teams, I strive to deliver innovative and efficient projects that create meaningful, lasting impact."

Rewrite this into polished website copy without changing the meaning.

Layout:

Left:
Large vertical text:

ABOUT
ME

Right:
Main paragraph.

Below:

A few personal professional highlights:

DIGITAL MARKETING
MARKETING RESEARCH
BUSINESS ANALYSIS
GTM AUTOMATION
DIGITAL PRESENCE
CONTENT STRATEGY

Use subtle scroll reveal animation.

==================================================
10. SKILLS / EXPERTISE
==================================================

Create a highly interactive skills section.

Title:

EXPERTISE

Do NOT simply create a boring list of skills.

Create categories.

Category 01:
DIGITAL MARKETING

Skills:
- Content Marketing
- Content Writing
- Influencer Marketing
- SEO
- SEM
- SMM
- Meta Ads
- Google Ads
- LinkedIn Ads
- Email Marketing

Category 02:
ANALYTICS & RESEARCH

Skills:
- Google Analytics 4
- Google Search Console
- Keyword Research
- Marketing Research
- Excel
- Google Sheets
- Data Analysis
- A/B Testing
- Conversion Rate Optimization

Category 03:
AUTOMATION & TOOLS

Skills:
- Clay
- Zoho
- HubSpot
- ActiveCampaign
- Google Business Profile
- Meta Business Suite
- Bing Places
- MapMyIndia
- WordPress
- CMS Management

Category 04:
CREATIVE

Skills:
- Canva
- Adobe Photoshop
- CapCut
- Premiere Pro
- Copywriting
- Video Scripts
- Social Media Creative Strategy
- AI Marketing Tools
- ChatGPT
- Jasper

Create interactive skill cards.

On hover:
- Skill name moves slightly
- subtle line animation
- number/category indicator appears

On mobile, cards should remain easy to interact with.

==================================================
11. EXPERIENCE SECTION
==================================================

Create a premium career timeline.

Title:

EXPERIENCE

Use a vertical timeline on desktop.

Each experience should have:

Year
Company
Role
Description
Responsibilities

==================================================
EXPERIENCE 01
==================================================

PROMANAGE.BIZ

Digital Customer Executive

2024 – Present

2 Years

Responsibilities:

- Managed end-to-end digital presence for a diverse portfolio of leading international and Indian brands.
- Worked with brands including DavaIndia Pharmacy, Apollo Pharmacy & Hospitals, SpecsMakers, TAFE, Aditya Birla Fashion and Retail, Medall, iPlanet, Gofix, Elite Fits, and Nibav Lifts.
- Handled business listings and online presence management across Google Business Profile, Meta Business Suite, Bing Places, and MapMyIndia.
- Ensured accuracy and consistency of digital listings.
- Provided strategic recommendations to improve online presence.
- Strengthened Google visibility and local engagement.
- Collaborated with cross-functional teams and client stakeholders.
- Resolved listing issues.
- Optimized profiles.
- Drove continuous improvements in digital performance.

==================================================
EXPERIENCE 02
==================================================

RPT PRIVATE LIMITED

Business Analyst Officer / Intern

2023 – 2024

Description:

Worked as an intern in the role of Business Analyst Officer, handling property loan processing.

==================================================
EXPERIENCE 03
==================================================

NUMA BENGALURU INNOVATIONS PRIVATE LIMITED

Digital Support Engineer

2022

Description:

Worked as a Digital Support Engineer on a large-scale project involving a water management system as part of the KOVAI INNOVATE program.

==================================================
EXPERIENCE 04
==================================================

GOVERNMENT PROJECT – UBA PROJECT

2023

Structural Engineer

Description:

As part of the UBA-supported Live-in Lab project, worked as a structural engineer in constructing a check dam in a tribal village to address environmental and community needs.

The dam helped combat soil erosion while providing clean water for the tribal community and local wildlife.

==================================================
12. EXPERIENCE INTERACTION
==================================================

The experience timeline should be interactive.

Desktop:

A vertical line runs down the page.

Each experience appears as the user scrolls.

Use GSAP ScrollTrigger.

Animation:

- Timeline line grows as scrolling progresses.
- Year fades/slides in.
- Company name reveals.
- Responsibilities stagger into view.
- Small timeline marker expands when active.

Do not overanimate.

Animation should feel like a premium editorial website.

==================================================
13. PROJECTS SECTION
==================================================

Title:

SELECTED PROJECTS

Create large editorial project cards.

Projects should NOT look like generic software project cards.

Each project should feel like a case study.

Project 01:

SOCIAL MEDIA MARKETING & CONTENT STRATEGY

Year:
2025

Description:

Worked on social media marketing, marketing research and content strategy across multiple brands.

Work included:

- Swiggy market research
- Content marketing for Eco-Grove
- Social media optimization for Coimbatore Culinary Delights
- Copywriting
- Content writing
- Influencer marketing
- Influencer endorsements
- Digital marketing strategy for Textile Tales
- Video scripts
- Arıro Toys copywriting
- Beyond Water ad copy
- Social media strategy for an event management brand

Show tags:

SOCIAL MEDIA
CONTENT STRATEGY
MARKETING RESEARCH
COPYWRITING
BRAND STRATEGY

==================================================
PROJECT 02
==================================================

MARKETING RESEARCH & GTM AUTOMATION WITH CLAY

Year:
2026

Description:

Utilized Clay, a data enrichment and GTM automation platform, to run AI-powered marketing research across multiple brands, aggregate prospect data, and scale personalized outreach without engineering support.

Also gained hands-on experience executing a Meta Ads campaign as part of the initiative.

Tags:

CLAY
GTM AUTOMATION
AI MARKETING
DATA ENRICHMENT
MARKETING RESEARCH
META ADS

==================================================
14. PROJECT CARD DESIGN
==================================================

Make projects visually impressive.

Desktop:

Large horizontal cards.

Each card contains:

01
PROJECT CATEGORY

Large project title

Short description

Services/tags

"VIEW CASE STUDY →"

Even if no actual external case study exists, create an expandable project detail interaction.

On hover:

- Image/visual panel subtly scales
- Card moves 4-8px
- Arrow moves
- Border animation
- Number changes position slightly

On scroll:

Use GSAP ScrollTrigger for reveal.

Optional:
Create abstract visual graphics for each project rather than stock images.

==================================================
15. EDUCATION SECTION
==================================================

Title:

EDUCATION

Education 01:

Digital Marketing & Business Analytics

Digital Communication and Media/Multimedia

In KGISL Micro College

2024

Education 02:

Sri Ramakrishna Engineering College

BE Civil Engineering

2021 – 2024

Create elegant education cards/timeline.

==================================================
16. CAREER TRANSITION STORY
==================================================

An important aspect of the portfolio is that the user has experience across:

Civil Engineering
Digital Support Engineering
Business Analysis
Digital Marketing
Marketing Research
GTM Automation

Create a section titled:

FROM ENGINEERING TO DIGITAL GROWTH

Explain the transition as a strength.

Possible copy:

"My journey combines engineering discipline, business analysis, digital operations and marketing strategy. This cross-functional background allows me to approach digital challenges with both analytical thinking and creative problem-solving."

This should be a visually strong storytelling section.

Use a horizontal journey/timeline:

ENGINEERING
↓
DIGITAL SUPPORT
↓
BUSINESS ANALYSIS
↓
DIGITAL MARKETING
↓
MARKETING RESEARCH
↓
GTM AUTOMATION

Animate the journey as the user scrolls.

==================================================
17. CONTACT SECTION
==================================================

Create a strong final CTA.

Headline:

LET'S BUILD SOMETHING MEANINGFUL.

Supporting text:

"Have a project, opportunity, or idea? Let's connect and explore how digital strategy, research and technology can create measurable impact."

Contact details from resume:

Phone:
+91-9486972766

Email:
prashanthvelu0409@gmail.com

Location:
Coimbatore, India

Create:

EMAIL ME →
LET'S CONNECT →

Do not expose unnecessary personal information in metadata or structured data beyond what is appropriate.

Make email clickable.

Make phone clickable.

==================================================
18. FOOTER
==================================================

Footer should be minimal.

Display:

PRASHANTH VELUV

DIGITAL MARKETING
BUSINESS ANALYTICS
MARKETING RESEARCH

Navigation links.

Copyright:

© 2026 Prashanth Veluv. All rights reserved.

Add a small "BACK TO TOP ↑" interaction.

==================================================
19. ANIMATION SYSTEM
==================================================

Animations are extremely important.

Use GSAP + ScrollTrigger for major scroll animations.

Use Framer Motion for smaller UI interactions.

Animation principles:

- Smooth
- Fast enough
- Elegant
- Professional
- Subtle
- Never distracting

Use:

1. Page load animation
2. Text reveal
3. Image reveal
4. Scroll-triggered sections
5. Staggered cards
6. Timeline animation
7. Hover interactions
8. Navigation transitions
9. Back-to-top animation
10. Smooth scrolling

Potential GSAP effects:

- opacity
- y translation
- clip-path reveal
- scale
- line drawing
- horizontal movement
- stagger

Avoid excessive parallax.

Avoid animations that negatively affect performance.

Respect:

prefers-reduced-motion

If reduced motion is enabled, disable/reduce animations.

==================================================
20. CUSTOM CURSOR
==================================================

Desktop only.

Optionally implement a very subtle custom cursor.

Normal cursor:

small circle.

When hovering over:

PROJECT
LINK
BUTTON

cursor expands.

Use Framer Motion or GSAP.

Do NOT implement custom cursor on mobile.

If the implementation affects performance or usability, skip it.

==================================================
21. SCROLL EXPERIENCE
==================================================

Implement smooth scrolling.

Navigation should scroll to sections.

Use CSS scroll-behavior or Lenis only if necessary.

Do not add unnecessary dependencies.

The scrolling should feel smooth and premium.

==================================================
22. SEO REQUIREMENTS
==================================================

SEO is very important.

Implement proper SEO.

Title:

Prashanth Veluv | Digital Marketing & Business Analyst

Meta description:

"Prashanth Veluv is a Digital Marketing and Business Analytics professional specializing in digital presence management, marketing research, content strategy, SEO, GTM automation and digital growth."

Keywords should naturally cover:

- Prashanth Veluv
- Digital Marketing
- Digital Marketing Professional
- Business Analyst
- Marketing Research
- GTM Automation
- SEO
- SEM
- Social Media Marketing
- Content Strategy
- Digital Presence Management
- Clay
- Meta Ads
- Coimbatore

Do NOT keyword stuff.

Use semantic HTML:

<header>
<nav>
<main>
<section>
<article>
<footer>

Proper heading hierarchy:

H1:
Prashanth Veluv

H2:
About
Expertise
Experience
Projects
Education
Contact

Use descriptive alt text for images.

Example:

alt="Prashanth Veluv - Digital Marketing and Business Analytics Professional"

==================================================
23. STRUCTURED DATA
==================================================

Implement JSON-LD structured data where appropriate.

Use:

Person schema

Include:

name
jobTitle
email
telephone
address/locality
url

Potential job title:

Digital Marketing & Business Analytics Professional

Do not invent companies, awards, certifications, publications, or social accounts.

==================================================
24. OPEN GRAPH
==================================================

Add:

og:title
og:description
og:image
og:url
og:type

Also add:

Twitter/X card metadata.

Create a suitable social sharing preview design if possible.

==================================================
25. PERFORMANCE
==================================================

Performance is important.

Target:

Lighthouse:
90+

Optimize:

- Images
- Fonts
- JavaScript
- CSS
- Animation performance
- Lazy loading
- Code splitting where appropriate

Use:

WebP/AVIF where possible.

Do not load huge images unnecessarily.

Use lazy loading for images below the fold.

Animations should primarily use:

transform
opacity

Avoid layout-triggering animation wherever possible.

==================================================
26. ACCESSIBILITY
==================================================

Implement WCAG-friendly accessibility.

Requirements:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Accessible buttons
- Proper ARIA labels where necessary
- Alt text
- Good contrast
- Reduced motion support
- Mobile accessibility
- No inaccessible hover-only functionality

The site must remain usable without animation.

==================================================
27. RESPONSIVE DESIGN
==================================================

Must work beautifully on:

320px mobile
375px mobile
390px mobile
430px mobile
768px tablet
1024px laptop
1280px desktop
1440px desktop
1920px large desktop

Do not simply shrink the desktop design.

Create intentional mobile layouts.

Mobile:

Hero:
Stack vertically.

Experience:
Vertical timeline.

Projects:
Single column.

Skills:
Single/two column depending on width.

Navigation:
Hamburger.

Typography:
Use responsive clamp() values.

==================================================
28. DESIGN DETAILS
==================================================

Use thin borders heavily inspired by the resume.

Examples:

border: 1px solid rgba(40,40,40,0.25)

Use editorial spacing.

Large whitespace.

Use asymmetrical layouts where appropriate.

Use section numbers:

01 / ABOUT
02 / EXPERTISE
03 / EXPERIENCE
04 / PROJECTS
05 / EDUCATION
06 / CONTACT

This should make the site feel like a premium digital magazine/editorial portfolio.

==================================================
29. VISUAL ELEMENTS
==================================================

Create subtle abstract elements.

Examples:

- Thin horizontal lines
- Thin vertical lines
- Circular outlines
- Small dots
- Grid patterns
- Large background numbers
- Section markers
- Animated line drawings

Keep them monochrome.

Do NOT use random stock illustrations.

Do NOT use cheesy marketing graphics.

==================================================
30. IMAGE HANDLING
==================================================

The uploaded resume contains the user's profile photo.

Use the profile image from the provided resume as reference.

If extracting/cropping the profile photo programmatically is practical, create a clean profile image asset.

Otherwise create a placeholder:

/public/profile.jpg

and clearly structure the code so the image can easily be replaced.

Do not distort the portrait.

Maintain aspect ratio.

Use a grayscale or subtle muted treatment if visually appropriate.

==================================================
31. CONTENT ACCURACY
==================================================

IMPORTANT:

Do not invent:

- Jobs
- Companies
- Certifications
- Awards
- Social media profiles
- Statistics
- Revenue
- Marketing performance numbers
- Client results
- Education
- Skills not supported by the resume

You may improve wording and presentation.

You may make reasonable UX copy improvements.

But facts must remain consistent with the resume.

==================================================
32. COMPONENT ARCHITECTURE
==================================================

Create reusable components.

Suggested structure:

src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Expertise.tsx
│   ├── Experience.tsx
│   ├── ExperienceItem.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Education.tsx
│   ├── Journey.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── SectionHeading.tsx
│   ├── AnimatedText.tsx
│   └── CustomCursor.tsx
│
├── data/
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── education.ts
│
├── hooks/
│   └── useScrollAnimation.ts
│
├── lib/
│   └── animations.ts
│
├── styles/
│   └── globals.css
│
├── App.tsx
└── main.tsx

Keep content data separate from presentation components wherever practical.

==================================================
33. CODE QUALITY
==================================================

Use TypeScript properly.

Avoid:

- any
- duplicated components
- massive files
- inline styles everywhere
- unnecessary useEffect
- unnecessary state
- bad naming
- hardcoded repetitive content

Use clean interfaces/types.

Use reusable components.

Keep animation logic organized.

Add comments only where useful.

==================================================
34. ERROR HANDLING
==================================================

Contact form, if implemented:

Validate:

- Name
- Email
- Message

Show:

Loading state
Success state
Error state

Do not pretend the message was sent if there is no backend/email service.

If no backend is configured, use a mailto solution instead.

==================================================
35. DEPLOYMENT
==================================================

The application must be deployable to:

Vercel

or

Netlify

Provide:

README.md

including:

- Project overview
- Tech stack
- Installation
- Development
- Build
- Deployment
- Environment variables if required

Commands should work:

npm install

npm run dev

npm run build

npm run preview

==================================================
36. FAVICON / BRANDING
==================================================

Create a simple text/logo-based favicon:

PV

Use monochrome branding.

Create:

favicon.svg

and configure it properly.

==================================================
37. RESUME DOWNLOAD
==================================================

Add a button:

DOWNLOAD RESUME ↓

The project should support:

/public/Prashanth-Veluv-Resume.pdf

If the PDF is not available, create the link structure but do not invent a PDF.

==================================================
38. FINAL VISUAL QUALITY
==================================================

The final result should resemble a premium portfolio from an experienced designer.

Reference design philosophy:

- Editorial websites
- Swiss design
- Modern monochrome portfolios
- Premium agency websites
- Minimal corporate branding

The site should have:

Strong typography
Excellent whitespace
Subtle motion
Strong hierarchy
Beautiful transitions
Minimal colors
Clear storytelling

==================================================
39. DO NOT DO THESE THINGS
==================================================

DO NOT:

- Use a generic Bootstrap template
- Use excessive gradients
- Use neon colors
- Use excessive glassmorphism
- Use random stock photos
- Use random statistics
- Invent achievements
- Invent client results
- Use giant blobs everywhere
- Use excessive rounded cards
- Overuse shadows
- Create a generic developer portfolio
- Add fake testimonials
- Add fake certifications
- Add fake social links
- Add fake GitHub projects
- Add fake case study metrics
- Add unnecessary backend
- Overanimate every element

==================================================
40. DEVELOPMENT WORKFLOW
==================================================

Before writing the final code:

STEP 1:
Analyze the resume content and visual style.

STEP 2:
Define the design system.

STEP 3:
Create the React/Vite/TypeScript project.

STEP 4:
Create reusable components.

STEP 5:
Implement desktop design.

STEP 6:
Implement mobile design.

STEP 7:
Implement GSAP animations.

STEP 8:
Implement Framer Motion interactions.

STEP 9:
Implement SEO metadata and structured data.

STEP 10:
Optimize accessibility.

STEP 11:
Optimize performance.

STEP 12:
Run build.

STEP 13:
Fix all TypeScript/build/lint errors.

STEP 14:
Review the website visually.

STEP 15:
Fix spacing, typography, responsive behavior and animation issues.

==================================================
41. IMPORTANT: DO NOT STOP AT A BASIC IMPLEMENTATION
==================================================

I want you to actually build the complete website.

Do not respond with only:

"Here is how you can build it."

Instead:

- Create the project
- Create all required files
- Install dependencies
- Implement the UI
- Implement animations
- Implement responsive behavior
- Implement SEO
- Run the build
- Fix errors
- Verify the final implementation

If you have access to a browser/preview environment, inspect the result and refine it.

==================================================
42. FINAL ACCEPTANCE CRITERIA
==================================================

The project is considered complete only when:

[ ] React application works
[ ] TypeScript works
[ ] Vite works
[ ] Tailwind works
[ ] Desktop layout works
[ ] Mobile layout works
[ ] Hero animation works
[ ] Scroll animations work
[ ] Experience timeline works
[ ] Project interactions work
[ ] Navigation works
[ ] Contact section works
[ ] SEO metadata exists
[ ] JSON-LD exists
[ ] Open Graph metadata exists
[ ] Accessibility is considered
[ ] prefers-reduced-motion is supported
[ ] Images are optimized
[ ] No console errors
[ ] No TypeScript errors
[ ] npm run build succeeds
[ ] README exists
[ ] Deployment instructions exist

==================================================
43. FINAL CREATIVE DIRECTION
==================================================

The emotional feeling of the website should be:

"Quiet confidence."

It should not scream for attention.

It should make the visitor think:

"This person is analytical, creative, technically capable and understands digital business."

The resume uses grey, black and white.

Keep that identity.

But transform it into a much more sophisticated digital experience.

Think:

EDITORIAL × DIGITAL MARKETING × BUSINESS ANALYTICS × MINIMALISM

The final website should feel like a personal brand rather than an online resume.

Build it now.
