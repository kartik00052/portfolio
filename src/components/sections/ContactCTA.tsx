"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/ui/icons";
import Magnetic from "@/components/animations/Magnetic";
import { SOCIALS } from "@/data/social";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.fromTo(
        el.querySelectorAll("[data-cta]"),
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        }
      );
    },
    { scope: ref }
  );

  const email = SOCIALS.email.address;

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden border-t border-border px-4 py-16 sm:px-5 sm:py-20 md:px-10 md:py-40"
      data-nav-section
    >
      <p
        aria-hidden="true"
        className="font-display watermark pointer-events-none absolute inset-x-0 top-6 select-none text-center text-border/40"
      >
        CONTACT
      </p>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="shape-ring shape-float absolute -left-24 bottom-[8%] h-64 w-64 opacity-30 md:h-96 md:w-96" />
        <div className="shape-grid absolute right-[4%] top-[20%] hidden h-40 w-40 opacity-50 md:block" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="flex justify-end">
          <p data-cta className="label mb-10 flex items-center gap-3 text-accent">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            AVAILABLE FOR WORK
          </p>
        </div>

        <h2 className="font-display display-xl mb-16 text-foreground">
          Let&apos;s build
          <br />
          something
          <br />
          <span className="text-muted">intelligent</span>
          <span className="text-accent">.</span>
        </h2>

        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div data-cta className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Magnetic>
              <a
                href={`mailto:${email}?subject=Let's%20build%20something%20intelligent`}
                className={cn(
                  "group flex items-center gap-3 border border-accent bg-accent px-8 py-5 text-sm font-semibold text-background",
                  "transition-[box-shadow,transform] duration-300 hover:shadow-[8px_8px_0_0_var(--accent-soft)] hover:-translate-y-1"
                )}
                data-cursor-text="EMAIL"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">{email}</span>
                <span className="sm:hidden">Email me</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={SOCIALS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-spring flex items-center gap-3 rounded-full border border-border px-8 py-5 text-sm font-medium text-foreground hover:-translate-y-1 hover:border-accent hover:text-accent"
                data-cursor-text="OPEN"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={SOCIALS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-spring flex items-center gap-3 rounded-full border border-border px-8 py-5 text-sm font-medium text-foreground hover:-translate-y-1 hover:border-accent hover:text-accent"
                data-cursor-text="OPEN"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={SOCIALS.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-spring flex items-center gap-3 rounded-full border border-border px-8 py-5 text-sm font-medium text-foreground hover:-translate-y-1 hover:border-accent hover:text-accent"
                data-cursor-text="OPEN"
              >
                <LeetcodeIcon className="h-4 w-4" />
                LeetCode
              </a>
            </Magnetic>
          </div>

          <p data-cta className="label max-w-[220px] text-muted">
            From global tech companies to growing startups — open to roles and
            interesting problems.
          </p>
        </div>
      </div>
    </section>
  );
}
