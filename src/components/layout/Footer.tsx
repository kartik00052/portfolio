import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { SOCIALS } from "@/data/social";

const NAV = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1440px] px-5 pt-16 md:px-10 md:pt-24">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[760px]">
            <a
              href={`mailto:${SOCIALS.email.address}`}
              className="giant-cta font-display link-line inline-block break-all text-foreground transition-colors hover:text-accent"
              data-cursor-text="MAIL"
            >
              {SOCIALS.email.address}
            </a>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2 md:items-end">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-2xl font-semibold tracking-tight text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="relative mt-20 flex items-end justify-between gap-6">
          <div className="flex flex-col gap-3 pb-8">
            <a
              href={SOCIALS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
              data-cursor-text="OPEN"
            >
              <GithubIcon className="h-4 w-4" /> GitHub ↗
            </a>
            <a
              href={SOCIALS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
              data-cursor-text="OPEN"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn ↗
            </a>
          </div>

          <p
            aria-hidden="true"
            className="font-display watermark pointer-events-none select-none text-peach-deep/70"
          >
            DHAMA
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border py-6 md:flex-row md:items-center md:justify-between">
          <p className="label text-muted">© 2026 Devansh Dhama</p>
          <p className="label text-muted">
            Built with Next.js · AI/ML Engineer · India
          </p>
        </div>
      </div>
    </footer>
  );
}
