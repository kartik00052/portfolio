"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const INTERESTS = [
  {
    num: "A",
    title: "RAG & Retrieval",
    line: "Grounding LLMs in real documents — fusion retrieval, reranking, self-reflection, adaptive pipelines.",
  },
  {
    num: "B",
    title: "Agentic AI",
    line: "Graph-orchestrated agents that reason, adapt, and act — from evaluation loops to live interview products.",
  },
  {
    num: "C",
    title: "ML Infrastructure",
    line: "SDK-first, offline-first pipelines where every stage is a typed, testable, reusable unit.",
  },
  {
    num: "D",
    title: "Explainability",
    line: "Transparent ML — automated decisions that are inspectable, overridable, and reportable.",
  },
  {
    num: "E",
    title: "Open-Source Engineering",
    line: "MIT-licensed tools like PhronesisML: real SDKs, real CI, real users — not demo repos.",
  },
];

export default function ResearchSection() {
  return (
    <section
      id="research"
      className="border-t border-border px-5 py-28 md:px-10 md:py-40"
      data-nav-section
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionLabel index="05" label="Research & Engineering" className="mb-16" />
        </Reveal>

        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal>
            <h2 className="font-display display-lg text-foreground">
              Where I spend my
              <br />
              <span className="text-muted">engineering focus</span>
              <span className="text-accent">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-base leading-relaxed text-muted">
              Serious engineering and research around AI systems — built in the
              open, shipped to users, and measured on the ground.
            </p>
          </Reveal>
        </div>

        <ul>
          {INTERESTS.map((item, i) => (
            <Reveal key={item.num} delay={i * 0.05}>
              <li className="group grid grid-cols-1 gap-4 border-t border-border py-8 transition-colors last:border-b md:grid-cols-[auto_1fr_1fr] md:items-baseline md:gap-10">
                <span className="label text-accent">{item.num}</span>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent md:text-4xl">
                  {item.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
                  {item.line}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="mt-14">
            <Link
              href="/research"
              className="group inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              <span className="label">Research page</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
