import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/animations/Reveal";
import { PROFILE } from "@/data/social";

export const metadata: Metadata = {
  title: "Research",
  description: `${PROFILE.name} — research and engineering focus: RAG, agentic AI, ML infrastructure, explainability.`,
};

const AREAS = [
  {
    num: "01",
    title: "Retrieval-Augmented Generation",
    line: "How do you make LLMs trustworthy against real documents? I work across the whole retrieval stack — chunking strategies, semantic + keyword fusion, reranking, contextual compression, and self-reflective pipelines that verify their own grounding.",
    openSource: "RAG-Techniques — 19 runnable strategies from naive vector search to Self-RAG, CRAG, Graph RAG, and HyDE/HyPE.",
    repo: "https://github.com/kartik00052/RAG-Techniques",
  },
  {
    num: "02",
    title: "Agentic AI & Orchestration",
    line: "Agents stop being toys when they hold state, reason, and adapt. I model orchestration as typed graphs — where every decision (what to ask next, which tool to call) is inspectable and testable.",
    openSource: "ProbeIQ — a live adaptive interview agent that decides each next question from the previous answer.",
    repo: "https://github.com/kartik00052/ProbeIQ",
  },
  {
    num: "03",
    title: "ML Engineering & SDK Design",
    line: "Notebooks don't scale and AutoML is a black box. I build SDK-first pipelines where every stage — ETL, EDA, feature engineering, engine selection, training, explainability — is a discrete, typed, reusable unit.",
    openSource: "PhronesisML — an MIT-licensed, offline-first ML engineering SDK on PyPI.",
    repo: "https://github.com/kartik00052/PhronesisML",
  },
  {
    num: "04",
    title: "Explainability & Evaluation",
    line: "If a pipeline can't tell you why it decided something, it isn't production-ready. I care about evaluation harnesses, inspectable decisions, and artifacts that can be audited after the run.",
    openSource: "Chunk-size benchmarking on faithfulness, relevancy and speed inside RAG-Techniques.",
    repo: "https://github.com/kartik00052/RAG-Techniques",
  },
];

export default function ResearchPage() {
  return (
    <div className="px-5 pb-28 pt-32 md:px-10 md:pb-40 md:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionLabel index="01" label="Research & Engineering" className="mb-10" />
        </Reveal>

        <Reveal>
          <h1 className="font-display display-xl mb-12 max-w-5xl text-foreground">
            Where I focus
            <br />
            <span className="text-muted">my engineering</span>
            <span className="text-accent">.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-20 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Everything below is being worked on in the open — source code,
            docs, and deployed products you can run yourself.
          </p>
        </Reveal>

        <ul>
          {AREAS.map((area, i) => (
            <Reveal key={area.num} delay={i * 0.05}>
              <li className="grid grid-cols-1 gap-6 border-t border-border py-12 last:border-b md:grid-cols-12 md:gap-10">
                <div className="md:col-span-1">
                  <span className="label text-accent">{area.num}</span>
                </div>
                <div className="md:col-span-11">
                  <h2 className="font-display mb-5 text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
                    {area.title}
                  </h2>
                  <p className="mb-5 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
                    {area.line}
                  </p>
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
                    <p className="label max-w-xl text-foreground/70">
                      {area.openSource}
                    </p>
                    <a
                      href={area.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent"
                      data-cursor-text="OPEN"
                    >
                      Repo
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="mt-20 border-t border-border pt-12">
            <p className="label mb-6 text-muted">Go deeper</p>
            <div className="flex flex-col gap-3">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                <span className="label">Case studies</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                <span className="label">Discuss a problem</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
