import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/animations/Reveal";

export default function NotFound() {
  return (
    <div className="px-5 pb-28 pt-40 md:px-10 md:pb-40 md:pt-48">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionLabel index="404" label="Not found" className="mb-10" />
        </Reveal>
        <Reveal>
          <h1 className="font-display display-xl mb-10 text-foreground">
            Lost in
            <br />
            <span className="text-muted">retrieval</span>
            <span className="text-accent">.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-12 max-w-md text-lg leading-relaxed text-muted">
            The page you&apos;re looking for wasn&apos;t found — no grounding
            retrieved. Let&apos;s get you back to a page that exists.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            <span className="label">Back home</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
