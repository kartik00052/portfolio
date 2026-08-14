"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroText from "@/components/hero/HeroText";
import HeroVisual from "@/components/hero/HeroVisual";
import { PROFILE } from "@/data/social";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        el,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.6, ease: "power2.out" }
      )
        .fromTo(
          '[data-hero="eyebrow"]',
          { y: 14, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7 }
        )
        .fromTo(
          '[data-hero="line1"], [data-hero="line2"], [data-hero="line3"]',
          { yPercent: 120 },
          { yPercent: 0, duration: 1.1, ease: "back.out(1.15)", stagger: 0.12 },
          "-=0.3"
        )
        .fromTo(
          '[data-hero="terminal"]',
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8 },
          "-=0.7"
        )
        .fromTo(
          '[data-hero="status"], [data-hero="scroll-hint"]',
          { y: 16, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          '[data-hero="shape"]',
          { scale: 0.6, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 1.2, stagger: 0.15, ease: "power3.out" },
          "-=1"
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-5 pb-8 pt-28 md:px-10 md:pb-10 md:pt-36"
      aria-label="Introduction"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          data-hero="shape"
          className="shape-ring shape-float absolute -right-16 top-24 h-56 w-56 opacity-40 md:-right-24 md:h-[26rem] md:w-[26rem]"
        />
        <div
          data-hero="shape"
          className="shape-ring shape-spin absolute right-[6%] top-[30%] hidden h-20 w-20 md:block"
        />
        <div
          data-hero="shape"
          className="shape-ring-accent shape-float absolute bottom-[16%] right-[42%] hidden h-10 w-10 md:block"
        />
        <div
          data-hero="shape"
          className="shape-grid absolute bottom-[22%] left-[-4%] h-40 w-40 opacity-70 md:h-64 md:w-64"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-10 md:min-h-[62vh] md:justify-between">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              data-hero="eyebrow"
              className="label mb-6 text-accent"
            >
              {PROFILE.title} · ML BACKEND · LLM & RAG
            </p>
            <HeroText />
          </div>
          <div className="hidden shrink-0 md:block">
            <HeroVisual />
          </div>
        </div>
        <div className="md:hidden">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
