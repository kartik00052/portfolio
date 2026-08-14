"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROJECTS, type Project } from "@/data/projects";
import ProjectArt from "@/components/projects/ProjectArt";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/animations/Reveal";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.fromTo(
        el.querySelector("[data-project='img']"),
        { scale: 1.12, autoAlpha: 0.5 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        }
      );
      gsap.fromTo(
        el.querySelector("[data-project='info']"),
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 78%", once: true },
        }
      );
      gsap.fromTo(
        el.querySelector("[data-project='num']"),
        { yPercent: 40, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 0.12,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
    },
    { scope: ref }
  );

  return (
    <article
      ref={ref}
      className="group grid grid-cols-1 overflow-hidden rounded-card border border-border bg-surface transition-colors duration-500 hover:border-border/60 md:grid-cols-[1.15fr_1fr]"
    >
      <Link
        href={`/work/${project.slug}`}
        className="relative block overflow-hidden"
        data-cursor-text="VIEW"
      >
        <span
          data-project="num"
          aria-hidden="true"
          className="font-display pointer-events-none absolute -left-3 -top-6 z-0 select-none text-[7rem] font-semibold leading-none text-foreground opacity-0 md:text-[9rem]"
        >
          {project.number}
        </span>
        <div className="relative z-10 aspect-[16/10] overflow-hidden md:aspect-auto md:h-full">
          <div data-project="img" className="h-full w-full will-change-transform">
            <ProjectArt
              art={project.art}
              className="h-full w-full scale-[1.08] transition-transform duration-[1.2s] ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-100"
            />
          </div>
          <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-background/30 opacity-0 backdrop-blur-[1px] transition-opacity duration-500 group-hover:opacity-100">
            <span className="label flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-background">
              VIEW CASE STUDY ↗
            </span>
          </span>
        </div>
      </Link>

      <div
        data-project="info"
        className="flex flex-col justify-between gap-8 p-7 md:p-9"
      >
        <div>
          <div className="label mb-6 flex items-center gap-3 text-muted">
            <span className="text-accent">{project.number}</span>
            <span className="h-px w-6 bg-border" aria-hidden="true" />
            <span>{project.year}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
          </div>

          <h3 className="font-display display-sm text-foreground">
            <Link href={`/work/${project.slug}`} className="link-line">
              {project.title}
            </Link>
          </h3>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
            {project.tagline}
          </p>
        </div>

        <div>
          <ul className="mb-7 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <li
                key={tech}
                className="border border-border px-3 py-1.5 text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href={`/work/${project.slug}`}
              className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Case study
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                Live demo
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectShowcase() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-border px-5 py-28 md:px-10 md:py-40"
      data-nav-section
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="shape-ring shape-float absolute -left-24 top-[15%] h-72 w-72 opacity-30 md:h-[30rem] md:w-[30rem]" />
        <div className="shape-ring-accent shape-float absolute right-[8%] top-[55%] hidden h-12 w-12 md:block" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="relative lg:sticky lg:top-32 lg:self-start">
            <div
              aria-hidden="true"
              className="shape-grid-accent pointer-events-none absolute -left-10 -top-10 hidden h-32 w-32 opacity-50 md:block"
            />
            <Reveal>
              <SectionLabel index="04" label="Selected Work" className="mb-8" />
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display display-lg mb-6 text-foreground">
                Selected
                <br />
                <span className="text-muted">work</span>
                <span className="text-accent">.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-8 max-w-sm text-base leading-relaxed text-muted">
                Three flagship systems — each a real, deployed product with
                public source code and docs.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                <span className="label">All projects</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="flex flex-col gap-10">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
