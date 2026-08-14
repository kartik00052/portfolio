"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    document.body.classList.add("has-custom-cursor");

    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const enter = (text?: string) => {
      gsap.to(ring, {
        scale: text ? 2.6 : 1.6,
        opacity: 1,
        duration: 0.35,
        ease: "power3.out",
      });
      gsap.to(dot, { scale: 0.3, opacity: 0, duration: 0.3 });
      if (text) {
        label.textContent = text;
        gsap.to(label, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(label, {
          opacity: 0,
          scale: 0.6,
          duration: 0.25,
          ease: "power2.in",
        });
      }
    };

    const leave = () => {
      gsap.to(ring, {
        scale: 1,
        opacity: 0.6,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(label, {
        opacity: 0,
        scale: 0.6,
        duration: 0.25,
        ease: "power2.in",
      });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const labelled = target.closest<HTMLElement>("[data-cursor-text]");
      if (labelled) {
        enter(labelled.dataset.cursorText);
        return;
      }
      const interactive = target.closest<HTMLElement>(
        "a, button, [role='button'], [data-cursor]"
      );
      if (interactive) enter();
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], [data-cursor], [data-cursor-text]")
      ) {
        leave();
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[200] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[200] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent opacity-60"
      >
        <span
          ref={labelRef}
          className="label text-accent opacity-0"
        />
      </div>
    </>
  );
}
