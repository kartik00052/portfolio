import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { SOCIALS, PROFILE } from "@/data/social";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${PROFILE.name} — open to AI/ML engineering roles and interesting problems.`,
};

export default function ContactPage() {
  const email = SOCIALS.email.address;
  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    `Let's build something intelligent — ${PROFILE.name}`
  )}`;

  return (
    <div className="px-5 pb-28 pt-32 md:px-10 md:pb-40 md:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionLabel index="01" label="Contact" className="mb-10" />
        </Reveal>

        <Reveal>
          <h1 className="font-display display-xl mb-14 max-w-5xl text-foreground">
            Have a problem
            <br />
            worth <span className="text-accent">solving</span>?
            <span className="text-muted">.</span>
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Reveal delay={0.1}>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
                Whether it&apos;s grounding an LLM in messy documents, building
                an agent that adapts, or shipping an ML product end-to-end —
                I&apos;m open to roles and to interesting problems.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={mailto}
                  className="group inline-flex items-center gap-3 border border-accent bg-accent px-8 py-5 text-sm font-semibold text-background"
                  data-cursor-text="EMAIL"
                >
                  <Mail className="h-4 w-4" />
                  <span className="hidden sm:inline">{email}</span>
                  <span className="sm:hidden">Email me</span>
                </a>
                <a
                  href={SOCIALS.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-border px-8 py-5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  data-cursor-text="OPEN"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={SOCIALS.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-border px-8 py-5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  data-cursor-text="OPEN"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:border-l lg:border-border lg:pl-16">
            <Reveal delay={0.2}>
              <p className="label mb-8 text-accent">Reach me fastest</p>
              <ul className="space-y-6">
                <li className="flex items-baseline justify-between border-b border-border pb-4">
                  <span className="label text-muted">Email</span>
                  <span className="font-display text-lg font-medium tracking-tight">
                    {email}
                  </span>
                </li>
                <li className="flex items-baseline justify-between border-b border-border pb-4">
                  <span className="label text-muted">Availability</span>
                  <span className="label text-accent">{PROFILE.availability}</span>
                </li>
                <li className="flex items-baseline justify-between border-b border-border pb-4">
                  <span className="label text-muted">Location</span>
                  <span className="label text-foreground/80">
                    {PROFILE.location}
                  </span>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-10 text-sm leading-relaxed text-muted">
Prefer async? Open an issue on any public repo — I read them
all. Include “portfolio” in the subject line of any email so it
gets to me quickly.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
