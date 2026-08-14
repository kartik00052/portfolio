# Kartik Sharma — Portfolio

Premium, motion-heavy portfolio for **Kartik Sharma**, AI/ML Engineer (ML Backend · LLM & RAG). Built with Next.js 16, TypeScript, Tailwind CSS v4, GSAP, Lenis, and Framer Motion.

## Stack

- **Framework** — Next.js 16 (App Router, RSC + RCC)
- **Styling** — Tailwind CSS v4 (CSS-first `@theme` design tokens)
- **Motion** — GSAP + ScrollTrigger, Lenis smooth scroll, Framer Motion
- **Fonts** — Geist, Geist Mono, Space Grotesk (via `next/font`)
- **Data** — static content in `src/data/`; live GitHub stats via `src/lib/github.ts`

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

### Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `GITHUB_TOKEN` | No | Personal access token for the GitHub API (server-side only). Without it the GitHub section falls back to static project data. |
| `NEXT_PUBLIC_SITE_URL` | For production | Public site URL, used for `sitemap.xml`, `robots.txt`, and Open Graph metadata. |

## Project structure

```
src/
  app/                 # routes: /, /about, /work, /work/[slug], /research, /contact
  components/
    animations/        # GSAP/Lenis primitives (Reveal, TextReveal, Magnetic, Parallax, SmoothScroll)
    hero/              # homepage hero (text, visual, GSAP orchestrator)
    layout/            # Navbar, Footer, PageTransition
    projects/          # ProjectShowcase, ProjectArt (generated SVG covers)
    sections/          # Intro, Skills, GithubActivity, Research, AboutPreview, ContactCTA
    ui/                # Marquee, SectionLabel, Button, CustomCursor, Grain
  data/                # social.ts, skills.ts, projects.ts (single source of truth)
  lib/                 # github.ts, utils.ts
```

## Notes

- All project facts come from the real GitHub profile [kartik00052](https://github.com/kartik00052) — no fabricated metrics.
- Replace the email + LinkedIn placeholders in `src/data/social.ts` before deploying.
- `npm run lint` and `npm run build` are used to verify the project.
