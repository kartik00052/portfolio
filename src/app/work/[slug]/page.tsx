import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import { PROJECTS, getProject, getNextProject } from "@/data/projects";
import ProjectArt from "@/components/projects/ProjectArt";
import Reveal from "@/components/animations/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROFILE } from "@/data/social";

type Props = PageProps<"/work/[slug]">;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — ${PROFILE.name}`,
      description: project.tagline,
      type: "article",
    },
  };
}

function Block({
  title,
  children,
  index,
}: {
  title: string;
  children: React.ReactNode;
  index: string;
}) {
  return (
    <section className="grid grid-cols-1 gap-6 border-t border-border py-14 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-3">
        <Reveal>
          <SectionLabel index={index} label={title} />
        </Reveal>
      </div>
      <div className="md:col-span-9">
        <Reveal delay={0.05}>{children}</Reveal>
      </div>
    </section>
  );
}

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(slug);

  return (
    <div className="px-4 pb-16 pt-28 sm:px-5 sm:pb-24 sm:pt-32 md:px-10 md:pb-40 md:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <Link
            href="/work"
            className="label mb-16 inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
        </Reveal>

        <div className="mb-10 flex flex-wrap items-center gap-4">
          <span className="label text-accent">{project.number}</span>
          <span className="h-px w-8 bg-border" aria-hidden="true" />
          <span className="label text-muted">{project.year}</span>
          <span className="label text-muted">{project.category}</span>
          {project.featured && <span className="label text-accent">FEATURED</span>}
        </div>

        <h1 className="font-display display-xl mb-8 max-w-5xl text-foreground">
          {project.title}
          <span className="text-accent">.</span>
        </h1>

        <Reveal delay={0.1}>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {project.tagline}
          </p>
        </Reveal>

        <Reveal>
          <div className="mb-20 overflow-hidden rounded-card border border-border bg-surface">
            <ProjectArt art={project.art} />
          </div>
        </Reveal>

        <Block title="Overview" index="01">
          <p className="max-w-2xl text-base leading-relaxed text-foreground/90 md:text-lg">
            {project.description}
          </p>
        </Block>

        {project.problem && project.solution && (
          <>
            <Block title="Problem" index="02">
              <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                {project.problem}
              </p>
            </Block>
            <Block title="Solution" index="03">
              <p className="max-w-2xl text-base leading-relaxed text-foreground/90 md:text-lg">
                {project.solution}
              </p>
            </Block>
          </>
        )}

        {project.architecture && (
          <Block title="Architecture" index="04">
            <ul className="space-y-3">
              {project.architecture.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 border-b border-border/60 pb-3 text-sm text-muted last:border-0 md:text-base"
                >
                  <span className="inline-block h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {project.implementation && (
          <Block title="Implementation" index="05">
            <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {project.implementation}
            </p>
          </Block>
        )}

        {project.challenges && (
          <Block title="Challenges" index="06">
            <ul className="space-y-3">
              {project.challenges.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 border-b border-border/60 pb-3 text-sm text-muted last:border-0 md:text-base"
                >
                  <span className="label shrink-0 text-accent">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {project.results && (
          <Block title="Results" index="07">
            <ul className="space-y-3">
              {project.results.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 border-b border-border/60 pb-3 text-sm text-foreground/90 last:border-0 md:text-base"
                >
                  <span className="inline-block h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        )}

        <Block title="Stack" index="08">
          <ul className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="border border-border px-4 py-2 text-sm text-foreground/90"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-accent bg-accent px-7 py-4 text-sm font-semibold text-background"
              data-cursor-text="OPEN"
            >
              View source
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-border px-7 py-4 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                data-cursor-text="OPEN"
              >
                Live demo
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
            {project.docs && (
              <a
                href={project.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-border px-7 py-4 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                data-cursor-text="OPEN"
              >
                Docs
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
        </Block>

        {next && (
          <div className="mt-20 border-t border-border pt-14">
            <Reveal>
              <p className="label mb-6 text-muted">Next project</p>
              <Link
                href={`/work/${next.slug}`}
                className="group flex items-baseline justify-between gap-6"
                data-cursor-text="VIEW"
              >
                <h2 className="font-display text-3xl font-semibold tracking-tight transition-colors group-hover:text-accent md:text-6xl">
                  {next.title}
                </h2>
                <ArrowRight className="h-8 w-8 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </Reveal>
          </div>
        )}
      </div>
    </div>
  );
}
