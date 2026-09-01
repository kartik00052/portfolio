import Link from "next/link";
import { Star } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { getGitHubData } from "@/lib/github";
import { SOCIALS } from "@/data/social";
import { PROJECTS } from "@/data/projects";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/animations/Reveal";

export default async function GithubActivity() {
  const data = await getGitHubData();

  const repos = data.ok && data.repos.length > 0 ? data.repos : null;
  const user = data.ok && data.user ? data.user : null;

  const fallbackProjects = PROJECTS.map((p) => ({
    name: p.title,
    description: p.tagline,
    language: p.technologies[0] ?? null,
    stargazers_count: null,
    html_url: p.github,
  }));

  const totalStars =
    repos?.reduce((sum, r) => sum + r.stargazers_count, 0) ?? null;

  const stats = [
    { label: "Public repos", value: user?.public_repos ?? "—" },
    { label: "Followers", value: user?.followers ?? "—" },
    { label: "Total stars", value: totalStars ?? "—" },
  ];

  return (
    <section
      id="github"
      className="border-t border-border px-4 py-16 sm:px-5 sm:py-20 md:px-10 md:py-40"
      data-nav-section
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionLabel index="03" label="Open Source / GitHub" className="mb-16" />
        </Reveal>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <a
              href={SOCIALS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4"
              data-cursor-text="OPEN"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent">
                <GithubIcon className="h-6 w-6 text-foreground group-hover:text-accent" />
              </span>
              <span>
                <span className="label block text-muted">@kartik00052</span>
                <span className="font-display text-xl font-semibold tracking-tight group-hover:text-accent">
                  GitHub profile ↗
                </span>
              </span>
            </a>

            <div className="mt-12 space-y-6">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <div className="flex items-baseline justify-between border-b border-border pb-3">
                    <span className="label text-muted">{stat.label}</span>
                    <span className="font-display text-3xl font-semibold tabular-nums">
                      {stat.value}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="label mt-10 hidden text-muted/60 lg:block">
              {data.ok
                ? "Live from the GitHub API · cached hourly"
                : "Static fallback — GitHub API unavailable"}
            </p>
          </div>

          <div className="flex flex-col">
            <p className="label mb-8 text-muted">Selected repositories</p>
            <ul>
              {(repos ?? fallbackProjects).map((repo, i) => (
                <Reveal key={repo.name} delay={i * 0.05}>
                  <li className="group border-b border-border py-6 first:pt-0">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      data-cursor-text="OPEN"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent md:text-2xl">
                          {repo.name}
                        </h3>
                        <div className="flex shrink-0 items-center gap-4 text-xs text-muted">
                          {repo.stargazers_count !== null && (
                            <span className="flex items-center gap-1">
                              <Star className="h-3.5 w-3.5" />{" "}
                              {repo.stargazers_count}
                            </span>
                          )}
                          {repo.language && (
                            <span className="label">{repo.language}</span>
                          )}
                        </div>
                      </div>
                      {repo.description && (
                        <p className="mt-2 max-w-xl text-sm text-muted">
                          {repo.description}
                        </p>
                      )}
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>

            <div className="mt-12">
              <Link
                href="/work"
                className="link-line label inline-flex items-center gap-2 text-accent"
              >
                View all projects →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
