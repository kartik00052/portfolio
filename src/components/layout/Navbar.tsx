"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
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
  const [scrolled, setScrolled] = useState(false);
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
      setScrolled(y > 40);
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
      <header
        ref={navRef}
        className={cn(
          "fixed inset-x-0 top-0 z-[150] transition-[transform,background-color,border-color] duration-500",
          hidden ? "-translate-y-full" : "translate-y-0",
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10"
        >
          <Link
            href="/"
            className="label link-line text-foreground hover:text-accent"
            aria-label="Kartik Sharma — home"
          >
            KARTIK<span className="text-accent">_</span>SHARMA
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => goSection(e, link.label)}
                  className={cn(
                    "label link-line text-muted transition-colors hover:text-foreground",
                    active === link.label && "text-foreground"
                  )}
                >
                  {link.label}
                  {active === link.label && (
                    <span className="sr-only">(current)</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href={SOCIALS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="GitHub profile"
              data-cursor-text="OPEN"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <button
              className="text-foreground md:hidden"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[140] flex flex-col items-center justify-center gap-8 bg-background transition-opacity duration-500 md:hidden",
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
            className="font-display text-4xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={SOCIALS.github.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="label mt-4 text-muted hover:text-accent"
        >
          GitHub →
        </a>
      </div>
    </>
  );
}
