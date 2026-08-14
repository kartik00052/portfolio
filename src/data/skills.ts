export type SkillCategory = {
  id: string;
  label: string;
  blurb: string;
  skills: { name: string; detail: string }[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-ml",
    label: "AI / ML",
    blurb: "LLM application engineering, retrieval, and agent orchestration.",
    skills: [
      { name: "LLMs", detail: "Prompt engineering, fine-tuning, structured output" },
      { name: "RAG", detail: "Retrieval pipelines, chunking, fusion & reranking" },
      { name: "Embeddings", detail: "Dense & sparse representations" },
      { name: "Vector Databases", detail: "FAISS, similarity search at scale" },
      { name: "Agents", detail: "Tool use, self-reflection, adaptive loops" },
      { name: "LangChain", detail: "Chains, retrievers, document loaders" },
      { name: "LangGraph", detail: "Stateful, graph-based agent orchestration" },
      { name: "Hugging Face", detail: "Model hub, transformers, tokenizers" },
      { name: "PyTorch", detail: "Model development and experimentation" },
    ],
  },
  {
    id: "backend",
    label: "BACKEND",
    blurb: "Production-grade services that expose ML systems cleanly.",
    skills: [
      { name: "Python", detail: "Primary language across projects" },
      { name: "FastAPI", detail: "Typed APIs, async services, dashboards" },
      { name: "PostgreSQL", detail: "Relational storage and queries" },
      { name: "Redis", detail: "Caching, queues, session state" },
      { name: "REST APIs", detail: "Contract-first API design" },
    ],
  },
  {
    id: "data",
    label: "DATA",
    blurb: "From messy raw data to clean, validated datasets.",
    skills: [
      { name: "Pandas", detail: "Tabular analysis and manipulation" },
      { name: "NumPy", detail: "Numerical computation" },
      { name: "Polars", detail: "Fast dataframe processing" },
      { name: "SQL", detail: "Data querying and modeling" },
    ],
  },
  {
    id: "infrastructure",
    label: "INFRASTRUCTURE",
    blurb: "Ship it, run it, watch it — reliably.",
    skills: [
      { name: "Docker", detail: "Containerized services" },
      { name: "Kubernetes", detail: "Orchestration for scale" },
      { name: "Vercel", detail: "Frontend deployment & previews" },
      { name: "CI/CD", detail: "Automated test and release pipelines" },
    ],
  },
  {
    id: "developer-tools",
    label: "DEVELOPER TOOLS",
    blurb: "The daily toolkit.",
    skills: [
      { name: "Git", detail: "Version control workflows" },
      { name: "GitHub", detail: "Open-source collaboration" },
      { name: "Linux", detail: "Primary working environment" },
      { name: "VS Code", detail: "Editor and terminal" },
    ],
  },
];
