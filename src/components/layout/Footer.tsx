import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
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
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight">
              Kartik<span className="text-accent">_</span>Sharma
            </p>
            <p className="label mt-2 text-muted">AI/ML Engineer</p>
          </div>

          <nav aria-label="Footer">
            <p className="label mb-4 text-muted">Navigate</p>
            <ul className="space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-line text-sm text-foreground/80 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label mb-4 text-muted">Connect</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={SOCIALS.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground"
                >
                  <GithubIcon className="h-4 w-4" /> GitHub
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIALS.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground"
                >
                  <LinkedinIcon className="h-4 w-4" /> LinkedIn
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SOCIALS.email.address}`}
                  className="link-line inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              </li>
            </ul>
          </div>

          <div className="md:text-right">
            <p className="label mb-4 text-muted">Stack</p>
            <p className="text-sm text-muted">
              Built with Next.js
              <br />
              Deployed on Vercel
              <br />
              <span className="mt-2 inline-block text-foreground/40">
                © 2026 Kartik Sharma
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
