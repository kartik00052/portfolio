"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageTransition() {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    const overlay = overlayRef.current;
    if (!overlay) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const tl = gsap.timeline();
    tl.set(overlay, { visibility: "visible" })
      .fromTo(
        overlay,
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 0.32, ease: "power3.inOut" }
      )
      .to(overlay, {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.32,
        ease: "power3.inOut",
      })
      .set(overlay, { visibility: "hidden" });
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[300] bg-accent"
      style={{ visibility: "hidden" }}
    />
  );
}
