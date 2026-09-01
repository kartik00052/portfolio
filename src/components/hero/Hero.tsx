"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import HeroText from "@/components/hero/HeroText";
import CoderIllustration from "@/components/hero/CoderIllustration";
import { PROFILE, SOCIALS } from "@/data/social";

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
        '[data-hero="panel"]',
        { autoAlpha: 0, scale: 0.985 },
        { autoAlpha: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      )
        .fromTo(
          '[data-hero="eyebrow"], [data-hero="status"]',
          { y: 16, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08 },
          "-=0.35"
        )
        .fromTo(
          '[data-hero="line1"], [data-hero="line2"], [data-hero="line3"]',
          { yPercent: 120 },
          { yPercent: 0, duration: 1.1, ease: "back.out(1.15)", stagger: 0.12 },
          "-=0.3"
        )
        .fromTo(
          '[data-hero="visual"]',
          { y: 40, autoAlpha: 0, scale: 0.94 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 1, ease: "back.out(1.2)" },
          "-=0.75"
        )
        .fromTo(
          '[data-hero="scroll-hint"]',
          { y: 16, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          '[data-hero="shape"]',
          { scale: 0.6, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 1.2, stagger: 0.15, ease: "power3.out" },
          "-=1"
        );

      gsap.to('[data-hero="visual"]', {
        y: -14,
        ease: "none",
        yoyo: true,
        repeat: -1,
        duration: 3.4,
        delay: 2.2,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative px-3 pb-6 pt-24 sm:px-4 md:px-6 md:pb-8 md:pt-28"
      aria-label="Introduction"
    >
      <div className="mx-auto max-w-[1440px]">
        <div
          data-hero="panel"
          className="relative flex min-h-[80svh] flex-col overflow-hidden rounded-card bg-peach"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div
              data-hero="shape"
              className="shape-ring shape-float absolute -left-20 -top-20 h-64 w-64 border-muted/40 md:h-[26rem] md:w-[26rem]"
            />
            <div
              data-hero="shape"
              className="shape-ring-accent shape-spin absolute right-[8%] top-[16%] h-24 w-24 md:h-32 md:w-32"
            />
            <div
              data-hero="shape"
              className="shape-grid absolute bottom-[30%] left-[38%] hidden h-40 w-40 opacity-60 md:block"
            />
            <div
              data-hero="shape"
              className="absolute right-[45%] top-[24%] hidden h-24 w-24 md:block"
            >
              <span className="shape-plus block text-foreground/70" />
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between gap-4 px-6 py-6 md:px-12 md:py-8">
            <p
              data-hero="eyebrow"
              className="label flex items-center gap-2 rounded-full border border-foreground/15 bg-background/50 px-4 py-2 text-foreground backdrop-blur-sm"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {PROFILE.title}
            </p>
            <a
              data-hero="status"
              href={`mailto:${SOCIALS.email.address}`}
              className="label hidden items-center gap-2 rounded-full border border-foreground/15 bg-background/50 px-4 py-2 text-foreground backdrop-blur-sm transition-transform duration-300 hover:scale-95 md:flex"
              data-cursor-text="MAIL"
            >
              OPEN TO AI/ML ROLES ↗
            </a>
          </div>

          <div className="relative z-10 flex flex-1 flex-col justify-end gap-10 px-6 pb-8 md:flex-row md:items-end md:justify-between md:px-12 md:pb-12">
            <HeroText />
            <div
              data-hero="visual"
              className="w-full max-w-[280px] shrink-0 sm:max-w-[340px] md:max-w-[460px]"
            >
              <CoderIllustration />
            </div>
          </div>

          <div
            data-hero="scroll-hint"
            className="label absolute bottom-10 right-10 z-10 hidden items-center gap-3 text-foreground/60 lg:flex"
          >
            SCROLL
            <span className="inline-block h-10 w-px bg-foreground/40" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-[1440px] items-center justify-between px-6 md:px-12">
        <p className="label text-muted">Selected work below</p>
        <Link
          href="/work"
          className="label link-line text-muted transition-colors hover:text-accent"
        >
          ALL PROJECTS ↗
        </Link>
      </div>
    </section>
  );
}
