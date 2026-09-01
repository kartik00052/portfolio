"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TextReveal from "@/components/animations/TextReveal";
import Reveal from "@/components/animations/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHTS = ["AI", "ML", "LLMs", "RAG", "AGENTS", "BACKEND", "SYSTEMS"];

export default function Intro() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;
      gsap.fromTo(
        '[data-intro="shadow"]',
        { yPercent: 12 },
        {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      id="identity"
      className="relative overflow-hidden border-t border-border px-4 py-16 sm:px-5 sm:py-20 md:px-10 md:py-40"
      data-nav-section
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="shape-ring shape-spin absolute -right-20 top-1/3 h-64 w-64 opacity-30 md:h-96 md:w-96" />
        <div className="shape-ring-accent shape-float absolute bottom-[12%] left-[6%] hidden h-12 w-12 md:block" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <Reveal>
          <SectionLabel index="01" label="Identity" className="mb-14" />
        </Reveal>

        <div className="relative">
          <p
            data-intro="shadow"
            aria-hidden="true"
            className="font-display watermark pointer-events-none absolute inset-x-0 top-0 -z-10 select-none text-border/60"
          >
            SYSTEMS
          </p>

          <TextReveal
            text="I build systems that turn models, data, and computation into useful intelligence."
            className="font-display display-lg max-w-6xl text-foreground"
            highlight={HIGHLIGHTS}
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              From retrieval pipelines that ground LLMs in real documents, to
              offline ML engineering SDKs and adaptive agent products — I ship
              the full stack: the models, the backend, the infra, and the
              product.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="label flex items-center gap-2 text-accent">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              OPEN SOURCE FIRST
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
