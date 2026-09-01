"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { SOCIALS } from "@/data/social";
import { scrollToSection } from "@/components/animations/SmoothScroll";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

const SECTION_IDS = ["work", "about", "research", "contact"];

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  const active =
    pathname === "/"
      ? activeSection
      : (LINKS.find((l) => pathname.startsWith(l.href))?.label ?? "");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 140 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(
              SECTION_IDS.includes(id)
                ? id.charAt(0).toUpperCase() + id.slice(1)
                : ""
            );
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  const goSection = (e: React.MouseEvent, label: string) => {
    if (pathname === "/") {
      const href = LINKS.find((l) => l.label === label)?.href;
      if (href) {
        e.preventDefault();
        scrollToSection(href.replace("/", "#"));
      }
    }
  };

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 top-3 z-[150] flex justify-center px-3 sm:px-4 transition-transform duration-500",
          hidden ? "-translate-y-[150%]" : "translate-y-0"
        )}
      >
        <header
          ref={navRef}
          className="pill flex w-full max-w-fit min-w-0 items-center gap-1 rounded-full py-1.5 pl-4 pr-2 sm:pl-5 shadow-[0_10px_40px_-12px_rgba(43,40,37,0.25)]"
        >
          <Link
            href="/"
            className="mr-3 flex items-center gap-2 text-foreground transition-transform duration-300 hover:scale-[0.92]"
            aria-label="Kartik Sharma — home"
          >
            <span className="font-display text-sm sm:text-lg font-semibold tracking-tight">
              Kartik Sharma
            </span>
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => goSection(e, link.label)}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[15px] font-medium text-muted transition-all duration-300 hover:scale-[0.92] hover:text-foreground",
                    active === link.label && "text-foreground"
                  )}
                >
                  {link.label}
                  {active === link.label && (
                    <span
                      className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                  )}
                  {active === link.label && (
                    <span className="sr-only">(current)</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-2 flex items-center gap-1.5">
            <a
              href={SOCIALS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-all duration-300 hover:scale-90 hover:bg-peach hover:text-foreground"
              aria-label="GitHub profile"
              data-cursor-text="OPEN"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={SOCIALS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 w-9 items-center justify-center rounded-full text-muted transition-all duration-300 hover:scale-90 hover:bg-peach hover:text-foreground sm:flex"
              aria-label="LinkedIn profile"
              data-cursor-text="OPEN"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </header>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-[140] flex flex-col items-center justify-center gap-6 bg-background transition-opacity duration-500 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
      >
        {LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => {
              goSection(e, link.label);
              setOpen(false);
            }}
            className="font-display text-5xl font-semibold tracking-tight text-foreground transition-transform duration-300 hover:scale-95"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-6 flex items-center gap-3">
          <a
            href={SOCIALS.github.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground"
            aria-label="GitHub profile"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={SOCIALS.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
}
