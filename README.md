# Samar Alqahtani — Portfolio

A dark, minimal portfolio built with Next.js (App Router), TypeScript, and
Tailwind CSS.

## Setup

Requires Node.js 18.18+ (Node 20 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # lint the project
```

## Project structure

```
app/
  layout.tsx              Root layout: fonts, metadata, Navbar + Footer
  page.tsx                Homepage: assembles all sections in order
  not-found.tsx           404 page (also used for unknown project slugs)
  globals.css             Tailwind entry point + a few small global styles
  projects/[slug]/page.tsx  Apple-style dynamic project detail page

components/
  Navbar.tsx              Sticky glass nav, icon buttons (GitHub/LinkedIn/Email) + Download CV
  Hero.tsx                 Name, role, pitch, CTAs, social icons, scroll cue, cursor glow
  CursorGlow.tsx            Subtle mouse-following light used inside Hero
  Projects.tsx             "Selected Work" — the largest section, sits right under Hero
  ProjectCard.tsx           Premium project card (has a wider "hero" variant for the
                            first project); cover, role, tech icon badges, CTAs
  TechBadge.tsx             Icon + label pill used for every technology tag site-wide
  About.tsx                One short, well-typeset paragraph — no cards or stats
  Skills.tsx                Grouped skills section, each skill as an icon badge
  Contact.tsx               Premium contact CTA (Email/LinkedIn/GitHub/CV, no form)
  Footer.tsx                 Minimal footer: copyright, socials, back-to-top
  BackToTopButton.tsx        Small button used by Footer
  SectionHeading.tsx         Shared "eyebrow + title" heading, optional icon

  Not rendered on the homepage (kept in the repo in case you want a CV-style
  timeline back later): Experience.tsx, TimelineCard.tsx, Education.tsx,
  ProfessionalPrograms.tsx. This portfolio is intentionally short — Hero,
  Selected Work, About, Skills, Contact — so it reads as a portfolio, not a résumé.

data/
  siteConfig.ts            Your name, email, social links, CV path, nav items (+ icons)
  projects.ts               All project content (cards + detail pages)
  techIcons.tsx             Maps a technology name to its official icon (Simple Icons via
                            react-icons, falling back to a Lucide icon when no logo exists)

types/
  project.ts                 Shared TypeScript types for project data

public/
  images/projects/           Project cover + gallery images
  cv/                         Your downloadable CV goes here
```

## Where to edit things

Everything you're likely to want to change lives in two files plus the
`public` folder — you shouldn't need to touch the components themselves.

**`data/siteConfig.ts`**
- Email address
- GitHub link
- LinkedIn link
- CV filename/path
- Nav labels

**`data/projects.ts`**
- Project descriptions, overview, problem, solution, role, features, challenges, learnings
- `status` — keep to the standard set ("Featured Project", "Published on App
  Store", "Professional Project", "Currently Developing", "Graduation
  Project"). Reserve `"UI/UX Case Study"` for design-only work like Talaq —
  every other project should read as a software engineering project.
- `roleTitle` — the short role shown on the project card (e.g. "iOS Developer")
- GitHub link per project (`links.github`)
- App Store / live demo link per project (`links.live`)
- Cover and gallery image paths
- `tech` — technology names shown as icon badges. Add a new technology to
  `data/techIcons.tsx` if it doesn't already have an icon mapped.

**`data/techIcons.tsx`**
- One place mapping a technology name to its icon. Official brand icons come
  from Simple Icons (via `react-icons/si`); anything without an official logo
  (SwiftUI, REST APIs, SQL, TestFlight, etc.) falls back to a Lucide icon.
  Any name not found here falls back to a generic code icon automatically.

**`public/images/projects/`**
- Replace the generated placeholder covers/screenshots with real ones.
  Keep the same filenames (e.g. `suhail-cover.png`) or update the paths
  in `data/projects.ts` if you rename files.
- The site works even if an image is missing — the layout just won't have
  a picture there — so you can swap these in gradually.

**`public/cv/`**
- Drop your real CV PDF here and make sure the filename matches
  `siteConfig.cvPath` in `data/siteConfig.ts` (defaults to
  `Samar-Alqahtani-CV.pdf`).

**Bringing back Experience / Education**
- `components/Experience.tsx`, `Education.tsx` and `ProfessionalPrograms.tsx`
  still exist with their content intact. To show them again, import and
  render them in `app/page.tsx`, and add matching entries back to
  `siteConfig.nav` in `data/siteConfig.ts`.

## Adding a new project

1. Add a new object to the `projects` array in `data/projects.ts` with a
   unique `slug`.
2. Add its cover + gallery images to `public/images/projects/`.
3. That's it — the homepage grid and the `/projects/[slug]` detail page
   are both generated automatically from this array.

## Notes

- Placeholder cover/screenshot images were generated so the site looks
  complete out of the box. They're clearly labeled as placeholders and are
  safe to replace at any time.
- Contact is intentionally a links-only CTA (Email/LinkedIn/GitHub), no form
  or backend involved.
- `metadataBase` in `app/layout.tsx` uses a placeholder domain — update it
  once you have a real domain for correct social-share previews.
