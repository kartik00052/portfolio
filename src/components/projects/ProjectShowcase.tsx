"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getProject, type Project } from "@/data/projects";
import ProjectArt from "@/components/projects/ProjectArt";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/animations/Reveal";

gsap.registerPlugin(ScrollTrigger);

function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const img = el.querySelector<HTMLElement>("[data-project='img']");
      const info = el.querySelector<HTMLElement>("[data-project='info']");
      const num = el.querySelector<HTMLElement>("[data-project='num']");

      gsap.fromTo(
        img,
        { scale: 1.1, autoAlpha: 0.6 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 78%", once: true },
        }
      );
      gsap.fromTo(
        info,
        { y: 48, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 75%", once: true },
        }
      );
      gsap.fromTo(
        num,
        { yPercent: 30, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 0.14,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
    },
    { scope: ref }
  );

  return (
    <article
      ref={ref}
      className="grid grid-cols-1 items-center gap-10 border-t border-border py-20 md:grid-cols-2 md:gap-16 md:py-28"
    >
      <Link
        href={`/work/${project.slug}`}
        className={`group relative block ${
          flip ? "md:order-2" : ""
        }`}
        data-cursor-text="VIEW"
      >
        <span
          data-project="num"
          aria-hidden="true"
          className="font-display pointer-events-none absolute -top-16 left-2 z-0 select-none text-[9rem] font-semibold leading-none text-foreground opacity-0 md:-top-24 md:text-[13rem]"
        >
          {project.number}
        </span>
        <div className="relative z-10 overflow-hidden border border-border bg-surface">
          <div data-project="img" className="will-change-transform">
            <ProjectArt
              art={project.art}
              className="scale-110 opacity-0 transition-all duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-background/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
            <span className="label flex items-center gap-2 text-background">
              <span className="rounded-full bg-accent px-5 py-3">
                VIEW CASE STUDY ↗
              </span>
            </span>
          </span>
        </div>
      </Link>

      <div data-project="info" className={flip ? "md:order-1" : ""}>
        <div className="label mb-6 flex items-center gap-4 text-muted">
          <span className="text-accent">{project.number}</span>
          <span className="h-px w-8 bg-border" aria-hidden="true" />
          <span>{project.year}</span>
          <span aria-hidden="true">·</span>
          <span>{project.category}</span>
        </div>

        <h3 className="font-display display-md mb-6 text-foreground">
          <Link href={`/work/${project.slug}`} className="link-line">
            {project.title}
          </Link>
        </h3>

        <p className="mb-8 max-w-md text-base leading-relaxed text-muted">
          {project.tagline}
        </p>

        <ul className="mb-10 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
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
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Case study
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectShowcase() {
  const projects = [
    { project: { slug: "rag-techniques" }, flip: false },
    { project: { slug: "phronesisml" }, flip: true },
    { project: { slug: "probeiq" }, flip: false },
  ];

  return (
    <section
      id="work"
      className="border-t border-border px-5 py-28 md:px-10 md:py-40"
      data-nav-section
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionLabel index="04" label="Selected Work" className="mb-8" />
        </Reveal>

        <Reveal>
          <h2 className="font-display display-lg mb-4 text-foreground">
            Selected
            <br />
            <span className="text-muted">work</span>
            <span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-4 max-w-xl text-base text-muted md:mb-20">
            Three flagship projects — each a real, deployed system with public
            source code.
          </p>
        </Reveal>

        <div>
          {projects.map((row) => {
            const project = getProject(row.project.slug);
            if (!project) return null;
            return <ProjectRow key={row.project.slug} project={project} flip={row.flip} />;
          })}
        </div>

        <Reveal>
          <div className="flex justify-end border-t border-border pt-10">
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              <span className="label">All projects</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
