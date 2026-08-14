import "server-only";

export type GitHubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
};

export type GitHubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  html_url: string;
  homepage: string | null;
};

export type GitHubData = {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  ok: boolean;
  message?: string;
};

const USERNAME = "kartik00052";

async function ghFetch(path: string) {
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    "User-Agent": "kartik-portfolio",
    Accept: "application/vnd.github+json",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`https://api.github.com${path}`, {
    headers,
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status}`);
  }
  return res.json();
}

export async function getGitHubData(): Promise<GitHubData> {
  try {
    const [user, repos] = await Promise.all([
      ghFetch(`/users/${USERNAME}`),
      ghFetch(`/users/${USERNAME}/repos?per_page=100&sort=updated`),
    ]);

    const cleanRepos = (repos as GitHubRepo[])
      .filter((r) => !r.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);

    return {
      user: user as GitHubUser,
      repos: cleanRepos,
      ok: true,
    };
  } catch (err) {
    return {
      user: null,
      repos: [],
      ok: false,
      message: err instanceof Error ? err.message : "GitHub API unavailable",
    };
  }
}
