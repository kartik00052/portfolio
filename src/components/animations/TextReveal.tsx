"use client";

import { useEffect, useRef, type ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TextRevealProps = {
  text: string;
  className?: string;
  as?: ElementType;
  /** "words" splits into masked words, "lines" reveals the block as one masked line */
  mode?: "words" | "block";
  playOn?: "scroll" | "load";
  delay?: number;
  highlight?: string[];
  accent?: string;
};

export default function TextReveal({
  text,
  className,
  as: Tag = "p",
  mode = "words",
  playOn = "scroll",
  delay = 0,
  highlight = [],
  accent = "text-accent",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const targets = el.querySelectorAll<HTMLElement>("[data-rv-word], [data-rv-block]");

    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(
        targets,
        { yPercent: 120 },
        {
          yPercent: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.045,
          delay,
        }
      );
      if (playOn === "load") {
        tween.play();
      } else {
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () => tween.play(),
        });
        tween.pause();
      }
    }, el);

    return () => ctx.revert();
  }, [text, playOn, delay]);

  const words = mode === "words" ? text.split(" ") : [text];

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => {
        const clean = word.replace(/[^a-zA-Z0-9]/g, "");
        const isHighlight = highlight.includes(clean);
        return (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <span
              data-rv-word
              className={`inline-block will-change-transform ${
                isHighlight ? accent : ""
              }`}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
