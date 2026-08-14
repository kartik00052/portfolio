import { SOCIALS } from "@/data/social";

export default function HeroVisual() {
  return (
    <div className="flex flex-col justify-between gap-8">
      <div className="flex justify-end">
        <div
          data-hero="terminal"
          className="font-mono w-full max-w-[340px] border border-border bg-surface/60 p-4 text-[13px] leading-relaxed"
        >
          <div className="mb-2 flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
          </div>
          <p>
            <span className="text-accent">~$</span> whoami
          </p>
          <p className="text-foreground/80">
            kartik.sharma <span className="text-muted">— AI/ML Engineer</span>
          </p>
          <p>
            <span className="text-accent">~$</span> status
          </p>
          <p className="text-foreground/80">
            building <span className="text-accent">intelligent systems</span>
            <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-accent align-middle" />
          </p>
        </div>
      </div>

      <div
        data-hero="status"
        className="flex items-center gap-3"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <p className="label text-foreground">
          OPEN TO AI/ML ENGINEERING ROLES
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span data-hero="scroll-hint" className="label flex items-center gap-3 text-muted">
          <span className="h-10 w-px bg-border" aria-hidden="true" />
          SCROLL
        </span>
        <a
          data-hero="scroll-hint"
          href={SOCIALS.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="label link-line text-muted transition-colors hover:text-accent"
          data-cursor-text="OPEN"
        >
          GITHUB ↗
        </a>
      </div>
    </div>
  );
}
