# Kartik Sharma — Portfolio

A premium, motion-heavy portfolio for **Kartik Sharma** — AI/ML Engineer · ML Backend · LLM & RAG.

Built with **Next.js 16** (App Router, React 19, TypeScript), **Tailwind CSS v4**, and a GSAP/Lenis/Framer Motion animation stack. All content is sourced from the real GitHub profile [`kartik00052`](https://github.com/kartik00052) — no fabricated metrics.

---

## Stack & skills used

| Skill area | Tool | Version | npm command | Where it lives |
| --- | --- | --- | --- | --- |
| Framework | Next.js (Turbopack) | 16.3.1 | `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"` | `src/app/` |
| UI runtime | React | 19.2.8 | (bundled with Next) | all components |
| Language | TypeScript | ^5 | (bundled with Next) | `src/**` |
| Styling | Tailwind CSS v4 | ^4 | (via create-next-app; PostCSS plugin `@tailwindcss/postcss`) | `src/app/globals.css` (`@theme inline` tokens) |
| Motion | GSAP + ScrollTrigger | 3.15.0 | `npm i gsap @gsap/react` | `src/components/animations/*`, `src/components/hero/Hero.tsx` |
| Scroll engine | Lenis (smooth scroll) | 1.3.26 | `npm i lenis` | `src/components/animations/SmoothScroll.tsx` |
| Motion (React-first) | Framer Motion | 13.1.0 | `npm i framer-motion` | `src/components/sections/Skills.tsx` (AnimatePresence) |
| Icons | lucide-react | 1.31.0 | `npm i lucide-react` | `src/components/ui/icons.tsx` (custom brand icons — lucide has no `Github`/`Linkedin` exports) |
| Fonts | Sora (display/sans) + Geist Mono (labels) | — | `next/font/google` (no npm install) | `src/app/layout.tsx` |
| Linting | ESLint + eslint-config-next | ^9 / 16.3.1 | (via create-next-app) | `eslint.config.mjs` |

> Runtime versions verified: Node 24.13.0, npm 11.6.2.

---

## Areas of expertise applied

- **Motion engineering** — GSAP timeline orchestration (masked line reveals, `back.out` overshoot), ScrollTrigger scroll-scrubbed effects, springy hover curves `cubic-bezier(.275,2.254,.281,.996)`, Lenis↔ScrollTrigger sync, Framer Motion `AnimatePresence` for state-driven UI.
- **Design systems** — CSS-first tokens via Tailwind v4 `@theme inline`: color, type scale (`display-xl/lg/md/sm`, `watermark`, `label`), shape language (`rounded-card`, rings, dot-grids), easing tokens, global reduced-motion policy.
- **Editorial typography** — Sora display face with tight negative tracking (Goga-like), `clamp()` fluid sizing, giant stroked/watermark text behind and within sections.
- **Server rendering / RSC architecture** — Server Components for pages + GitHub data, Client Components ("use client") only where interactivity/animations require it.
- **API integration with graceful fallback** — server-only GitHub API client (`lib/github.ts`) that falls back to static data when no `GITHUB_TOKEN` is present.
- **Accessibility** — `prefers-reduced-motion` respected everywhere, semantic landmarks, `aria` on decorative art/overlays, visible `:focus-visible`, custom cursor only on fine pointers.
- **Performance & SEO** — fully static prerender (SSG) + `generateStaticParams`, `next/font` self-hosted fonts, sitemap/robots/OpenGraph, lazy client bundles.

---

## Quickstart

```bash
npm install
cp .env.example .env.local   # optional, see "Environment"
npm run dev                  # http://localhost:3000
```

| Command | Purpose |
| --- | --- |
| `npm run dev` | dev server |
| `npm run build` | production build (static output) |
| `npm run start` | serve production build |
| `npm run lint` | ESLint |

### Environment

| Variable | Required | Purpose |
| --- | --- | --- |
| `GITHUB_TOKEN` | No | GitHub API token (server-side only). Without it, the GitHub section renders static fallback from `data/projects.ts`. |
| `NEXT_PUBLIC_SITE_URL` | Prod | Public URL used by `sitemap.ts`, `robots.ts`, and Open Graph. |

---

## Codebase map

```
src/
  app/                       # routes (App Router)
    layout.tsx               # fonts, metadata, Navbar/Footer/SmoothScroll/CustomCursor/Grain/PageTransition
    page.tsx                 # homepage: Hero → Marquee → Intro → Work → Skills → GitHub → Research → About → Contact
    globals.css              # THE design system (tokens, type, shapes, motion, reduced-motion)
    work/page.tsx            # all-projects index
    work/[slug]/page.tsx     # case study (generateStaticParams, generateMetadata, notFound)
    about|research|contact/  # static pages
    not-found.tsx, sitemap.ts, robots.ts, icon.svg, opengraph-image.tsx
  components/
    animations/              # Reveal, TextReveal, Magnetic, Parallax, SmoothScroll (Lenis + scrollToSection)
    hero/                    # Hero.tsx (GSAP timeline) + HeroText, CoderIllustration (animated SVG)
    layout/                  # Navbar (floating pill, section observer, mobile menu), Footer (giant name + email CTA), PageTransition (accent wipe)
    projects/                # ProjectShowcase (sticky-rail + rounded cards), ProjectArt (5 generative SVG covers)
    sections/                # Intro, Skills, GithubActivity, ResearchSection, AboutPreview, ContactCTA
    ui/                      # Marquee, SectionLabel, Button, CustomCursor, Grain, icons (GitHub/LinkedIn SVG)
  data/                      # SINGLE SOURCE OF TRUTH
    projects.ts              # 5 verified projects (slug, case-study fields, art key, github/demo/docs)
    skills.ts                # SKILL_CATEGORIES (5 categories, blurb + skill chips)
    social.ts                # PROFILE + SOCIALS (github, linkedin, email)
  lib/
    github.ts                # server-only GitHub fetch (revalidate 3600, fallback)
    utils.ts                 # cn(), prefersReducedMotion()
```

**Data flow**: components import from `src/data/*` (static) or call `lib/github.ts` (server-only). `data/projects.ts` drives the homepage showcase, `/work` index, `/work/[slug]` case studies, sitemap, and the GitHub fallback. `data/social.ts` drives the navbar, footer, contact CTA, and contact page.

---

## Design system (src/app/globals.css)

| Token | Value | Used for |
| --- | --- | --- |
| `--background` | `#faf6ef` | warm cream page bg |
| `--foreground` | `#2b2825` | warm ink text |
| `--muted` | `#96908c` | secondary text (Juan grey) |
| `--accent` | `#2e54fe` | blue — links, dots, active states |
| `--peach` / `--peach-deep` | `#ffbc95` / `#f99e76` | hero panel, marquee dots, footer name |
| `--grey-surface` | `#f4f4f4` | card / panel surface |
| `--border` | `#dcd6cd` | warm hairlines |
| `--ease-spring` | `cubic-bezier(.275,2.254,.281,.996)` | hovers/bounces |
| `--ease-out` | `cubic-bezier(.165,.84,.44,1)` | reveals |

Utilities: `.display-xl/lg/md/sm`, `.watermark`, `.label` (mono uppercase), `.giant-cta`, `.text-outline-grey` / `.text-outline-peach` (stroked display text), `.pill` (blurred nav surface), `.line-mask`, `.link-line`, `.rounded-card`, `.shape-ring`, `.shape-grid`, `.shape-float`, `.shape-spin`, `.hover-spring`, `.blur-in`, `.grain`, plus coder-illustration keyframes (`coder-blink`, `coder-type`, `coder-chip`).

**Design lineage**: adapted from award-site portfolios (Juan Mora) — warm light palette (cream/peach/blue/grey), giant negative-tracked type (Sora ≈ Goga), springy overshoot easing, floating pill navigation, rounded shapes, sticky-rail work composition, and a full-height orange hero panel with an animated "developer at a laptop" SVG illustration. Copy, content, and the illustration are original for Kartik; palette + motion system intentionally follow the reference direction.

---

## Common edits

- **Add a project**: append to `src/data/projects.ts` (required: `slug`, `title`, `year`, `category`, `tagline`, `description`, `technologies`, `github`, `art`; optional case-study blocks). Add a matching key to `ProjectArt` in `src/components/projects/ProjectArt.tsx`; add a `featured: true` flag to appear on the homepage.
- **Update skills**: edit `SKILL_CATEGORIES` in `src/data/skills.ts`.
- **Change contact details**: edit `src/data/social.ts`.
- **Change colors/fonts/motion tokens**: edit `src/app/globals.css` only — everything references the tokens.

---

## Conventions & gotchas (important for AI agents / future contributors)

1. **Next.js 16 breaking changes**: `params`/`searchParams` in dynamic routes are **Promises** — `const { slug } = await params`. Use the global helpers `PageProps<'/route'>` / `LayoutProps<'/route'>` (no import needed; generated by `next dev`/`build`). `generateStaticParams` + `export const dynamicParams = false` makes `/work/[slug]` fully static and 404s unknown slugs.
2. **lucide-react 1.31 removed brand icons** — `Github`/`Linkedin` do not exist. Custom SVGs live in `src/components/ui/icons.tsx` (`GithubIcon`, `LinkedinIcon`).
3. **Lenis + GSAP wiring**: `SmoothScroll.tsx` creates Lenis, feeds `lenis.raf` through `gsap.ticker`, and calls `ScrollTrigger.update()` on scroll. `scrollToSection(id)` is exported for nav anchors and uses `window.__lenis`.
4. **RSC / RCC split**: pages and `GithubActivity` are Server Components. Any component using hooks, GSAP, or Framer Motion must be `"use client"`. Server components cannot render client children that depend on runtime data.
5. **`lib/github.ts` is `server-only`** — import it only from server components/route handlers. It never throws; it returns `{ ok: false }` on API failure so pages always render.
6. **Reduced motion**: every animation checks `matchMedia("(prefers-reduced-motion: reduce)")` and skips JS animation; CSS respects it globally.
7. **ESLint (React Compiler-era rules)**: calling `setState` synchronously inside `useEffect` fails lint (`react-hooks/set-state-in-effect`). Derive during render or set state inside external callbacks (e.g., IntersectionObserver). Refs must not be read/written during render.
8. **Tailwind v4**: no `tailwind.config`; tokens come from `@theme inline` in `globals.css`. Arbitrary values like `ease-[cubic-bezier(...)]` and `duration-[1.2s]` work inline.
9. **Verify before ship**: `npm run lint` then `npm run build` (expect all routes `○` static or `●` SSG). Smoke-test with `npm run start` + `Invoke-WebRequest`/`curl`.

---

## Deploy

Hosts as a static-first Next.js app — deploy on **Vercel** (recommended): import the repo, set `GITHUB_TOKEN` and `NEXT_PUBLIC_SITE_URL`, deploy. `npm run build` outputs all 16 routes statically.
