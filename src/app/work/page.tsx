import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/animations/Reveal";
import ProjectArt from "@/components/projects/ProjectArt";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects — RAG pipelines, ML SDKs, and agentic products.",
};

export default function WorkIndexPage() {
  return (
    <div className="px-5 pb-28 pt-32 md:px-10 md:pb-40 md:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionLabel index="01" label="Selected Work" className="mb-10" />
        </Reveal>

        <Reveal>
          <h1 className="font-display display-xl mb-8 text-foreground">
            Work
            <span className="text-accent">.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-20 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Five public projects spanning LLM systems, ML engineering SDKs,
            agentic products, data crawling, and privacy-first NLP. Source code
            on GitHub, several deployed and documented.
          </p>
        </Reveal>

        <div>
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group grid grid-cols-1 gap-8 border-t border-border py-10 transition-colors last:border-b md:grid-cols-12 md:items-center md:gap-6 md:py-14"
              data-cursor-text="VIEW"
            >
              <div className="md:col-span-1">
                <span className="label text-accent">{project.number}</span>
              </div>

              <div className="md:col-span-5">
                <h2 className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent md:text-4xl">
                  {project.title}
                </h2>
              </div>

              <div className="md:col-span-5">
                <p className="max-w-md text-sm text-muted md:text-base">
                  {project.tagline}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  <span className="label text-muted/70">{project.year}</span>
                  <span className="label text-muted/70">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="md:col-span-1 md:flex md:justify-end">
                <ArrowUpRight className="h-6 w-6 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <div className="overflow-hidden rounded-card border border-border bg-surface">
              <ProjectArt art={PROJECTS[0].art} />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
