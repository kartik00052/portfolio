import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const BLOCKS = [
  {
    label: "WHO I AM",
    text: "An AI/ML engineer who cares about the whole pipeline — from raw data to deployed system — and about building it in the open.",
  },
  {
    label: "WHAT I BUILD",
    text: "RAG pipelines, ML backends, agentic products, and SDKs that make ML workflows transparent and reusable.",
  },
  {
    label: "WHAT I CARE ABOUT",
    text: "Systems that are grounded, not guessy. Pipelines that are inspectable, not black boxes. Code that ships.",
  },
  {
    label: "WHAT I'M LEARNING",
    text: "Deeper agent orchestration, evaluation engineering, and the infra that takes ML from notebook to production.",
  },
];

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="border-t border-border px-5 py-28 md:px-10 md:py-40"
      data-nav-section
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionLabel index="06" label="About" className="mb-16" />
        </Reveal>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <h2 className="font-display display-lg text-foreground">
                Engineer
                <br />
                by <span className="text-accent">method</span>
                <span className="text-muted">,</span>
                <br />
                builder
                <br />
                by instinct.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-12">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  <span className="label">Full story</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div>
            {BLOCKS.map((block, i) => (
              <Reveal key={block.label} delay={i * 0.06}>
                <div className="group border-t border-border py-7">
                  <p className="label mb-3 text-accent">{block.label}</p>
                  <p className="max-w-lg text-base leading-relaxed text-muted transition-colors group-hover:text-foreground md:text-lg">
                    {block.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
