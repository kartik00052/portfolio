import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { SKILL_CATEGORIES } from "@/data/skills";
import { SOCIALS, PROFILE } from "@/data/social";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: `${PROFILE.name} — AI/ML engineer building RAG pipelines, ML backends, and agentic infrastructure in the open.`,
};

const FOCUS = [
  {
    label: "I build",
    text: "RAG pipelines that ground LLMs in real documents, ML engineering SDKs that make workflows transparent, and agentic products that adapt to the person using them.",
  },
  {
    label: "I engineer",
    text: "The whole stack around the model — typed backends, retrieval infrastructure, evaluation harnesses, CI, and the data plumbing that makes ML systems testable.",
  },
  {
    label: "I publish",
    text: "MIT-licensed, documented open source like PhronesisML — SDKs with real users, not demo repos.",
  },
  {
    label: "I value",
    text: "Grounded over guessy. Inspectable over black-box. Shipped over stalled. Public over private.",
  },
];

export default function AboutPage() {
  return (
    <div className="px-5 pb-28 pt-32 md:px-10 md:pb-40 md:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionLabel index="01" label="About" className="mb-10" />
        </Reveal>

        <Reveal>
          <h1 className="font-display display-xl mb-12 max-w-5xl text-foreground">
            Engineer by method,
            <br />
            <span className="text-muted">builder</span> by instinct.
            <span className="text-accent">.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-20 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              I&apos;m {PROFILE.name}, an AI/ML engineer based in {PROFILE.location}. I
              work where models meet production: retrieval-augmented systems,
              ML backends, and the infrastructure that makes intelligent
              products reliable.
            </p>
          </div>
        </Reveal>

        <div className="mb-24 grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            {FOCUS.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.06}>
                <div className="border-t border-border py-7">
                  <p className="label mb-3 text-accent">{item.label}</p>
                  <p className="max-w-lg text-base leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="lg:border-l lg:border-border lg:pl-14">
            <Reveal>
              <p className="label mb-6 text-accent">Open-source footprint</p>
            </Reveal>
            <ul>
              {PROJECTS.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.05}>
                  <li className="group border-b border-border py-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-baseline justify-between gap-4"
                      data-cursor-text="OPEN"
                    >
                      <span className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-accent md:text-xl">
                        {project.title}
                      </span>
                      <span className="label shrink-0 text-muted">
                        {project.number}
                      </span>
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2}>
              <div className="mt-10">
                <a
                  href={SOCIALS.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  <span className="label">Full GitHub profile</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <SectionLabel index="02" label="Capabilities" className="mb-12" />
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, i) => (
            <Reveal key={category.id} delay={i * 0.06}>
              <div className="border border-border bg-surface p-7">
                <p className="label mb-6 text-accent">{category.label}</p>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      title={skill.detail}
                      className="border border-border px-3 py-1.5 text-xs text-foreground/80"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
