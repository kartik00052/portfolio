export type ProjectArt = "rag" | "phronesis" | "probeiq" | "extractor" | "message";

export type Project = {
  slug: string;
  number: string;
  title: string;
  year: string;
  category: string;
  tagline: string;
  description: string;
  problem?: string;
  solution?: string;
  architecture?: string[];
  implementation?: string;
  challenges?: string[];
  results?: string[];
  technologies: string[];
  github: string;
  demo?: string;
  docs?: string;
  art: ProjectArt;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "rag-techniques",
    number: "01",
    title: "RAG-Techniques",
    year: "2026",
    category: "LLM · Retrieval",
    tagline: "19 ways to ground LLMs in your documents.",
    description:
      "A comprehensive collection of Retrieval-Augmented Generation techniques implemented in Python — from simple vector search to self-reflective and corrective agents.",
    problem:
      "LLM answers drift without grounded context. Most tutorials cover one naive RAG pattern, leaving teams blind to the retrieval strategies that actually fix accuracy in production.",
    solution:
      "A single, runnable codebase implementing 19 distinct RAG strategies — covering retrieval, chunking, query enhancement, advanced indexing, self-reflection, and evaluation.",
    architecture: [
      "Retrieval — simple RAG, contextual compression, fusion (BM25 + dense), reranking, explainable retrieval, feedback loop",
      "Chunking — semantic chunking, context-enrichment windows",
      "Query enhancement — query transformations, HyDE, HyPE",
      "Advanced — hierarchical indices, document augmentation, Graph RAG, RAPTOR, Self-RAG, CRAG, adaptive retrieval",
      "Evaluation — chunk-size benchmarking on faithfulness, relevancy and speed",
    ],
    implementation:
      "Every technique runs from the CLI against a local document: `python simple_rag.py --path doc.pdf --query \"...\"`. All scripts share the same pipeline skeleton — Documents → Chunking → Embeddings → Retrieval → LLM → Answer — so each file is a drop-in comparison of one strategy.",
    challenges: [
      "Keeping 19 implementations consistent in interface while each one changes the retrieval strategy.",
      "Wiring evaluation harnesses (LlamaIndex) so chunk-size choices are measured, not guessed.",
      "Designing HyPE so hypothetical questions are generated at index time without leaking test queries.",
    ],
    results: [
      "19 runnable RAG techniques across 5 strategy families.",
      "Fusion retrieval that combines BM25 keyword search with dense vector search via an adjustable alpha.",
      "Self-RAG, CRAG and Graph RAG implementations for grounded, self-correcting pipelines.",
    ],
    technologies: ["Python", "LangChain", "LlamaIndex", "FAISS", "OpenAI", "sentence-transformers", "rank-bm25"],
    github: "https://github.com/kartik00052/RAG-Techniques",
    art: "rag",
    featured: true,
  },
  {
    slug: "phronesisml",
    number: "02",
    title: "PhronesisML",
    year: "2026",
    category: "ML ENGINEERING · SDK",
    tagline: "An open-source, offline-first ML engineering SDK.",
    description:
      "SDK-first, CLI-first offline machine-learning engineering. Models the whole ML lifecycle as a graph of cooperating agents over a shared, typed WorkflowState.",
    problem:
      "AutoML tools are opaque black boxes, and notebooks are throwaway artifacts. Data scientists needed a pipeline that is transparent, inspectable, overridable and production-ready.",
    solution:
      "PhronesisML recommends, it does not obscure. Every stage — ETL, validation, EDA, feature engineering, engine selection, training, explainability, reporting — is a discrete, testable, reusable unit over a typed workflow state.",
    architecture: [
      "Agent graph orchestrated with LangGraph on a typed WorkflowState",
      "ETL & validation — cleaning and schema checks before anything else",
      "EDA — automated analysis and reporting",
      "Feature engineering — transformers and target detection",
      "Engine selection — automated but always inspectable and overridable",
      "Training → explainability → versioned, reportable artifacts",
    ],
    implementation:
      "One line runs a complete pipeline: `Phronesis(\"data.csv\").run()`. Complexity is opt-in — the SDK exposes stage-by-stage control and low-level workflow access when needed. Core pipeline runs fully offline by design.",
    challenges: [
      "Keeping the simple API one line while exposing advanced stage control.",
      "Making automated decisions (engine selection, target detection) inspectable and overridable.",
      "Guaranteeing offline-first execution with no network dependency.",
    ],
    results: [
      "Published to PyPI and shipped with GitHub Actions CI.",
      "MIT-licensed, open-source — contributions and issues welcome.",
      "Every run produces versioned, structured artifacts — not a throwaway notebook cell.",
    ],
    technologies: ["Python", "LangGraph", "scikit-learn", "Pandas", "Typer/CLI", "GitHub Actions"],
    github: "https://github.com/kartik00052/Phronesisml",
    docs: "https://kartik00052.github.io/Phronesisml/",
    art: "phronesis",
    featured: true,
  },
  {
    slug: "probeiq",
    number: "03",
    title: "ProbeIQ",
    year: "2026",
    category: "AI PRODUCT · FULL-STACK",
    tagline: "The adaptive AI interview agent that reasons about what to ask next.",
    description:
      "A candidate's learning journey becomes a live, adaptive technical interview — every next question is decided by the answer before it.",
    problem:
      "In an AI cohort, no two candidates are identical. A fixed questionnaire ignores it: the fastest learner is never stretched and the shakiest topic is never probed.",
    solution:
      "A closed loop driven by actual learning evidence — observe, assess, probe, listen, adapt, conclude. It doesn't just hear an answer, it reasons about what to ask next.",
    architecture: [
      "FastAPI backend with typed contracts",
      "LangGraph agent deciding the next question from evaluation + reasoning",
      "React 19 frontend with a three.js (R3F) living console",
      "180 backend tests + 51 end-to-end tests passing",
    ],
    implementation:
      "The interview is a deliberate sequence. Learning evidence and conversation context produce the next question, which is evaluated and reasoned over before the follow-up is chosen.",
    challenges: [
      "Modeling the adaptive loop so evaluation and reasoning drive the next question.",
      "Splitting a fast backend test suite (180 passing) from a stable e2e suite (51 passing).",
      "Shipping a live three.js console without hurting performance or accessibility.",
    ],
    results: [
      "Live, deployed product.",
      "An interview that stretches the strongest candidate and probes the weakest topic.",
      "A real candidate journey from fixed questions to adaptive reasoning.",
    ],
    technologies: ["Python", "FastAPI", "LangGraph", "React 19", "Three.js (R3F)", "Vercel"],
    github: "https://github.com/kartik00052/ProbeIQ",
    demo: "https://probe-iq-dun.vercel.app",
    art: "probeiq",
    featured: true,
  },
  {
    slug: "hospital-website-extractor",
    number: "04",
    title: "Hospital Website Extractor",
    year: "2026",
    category: "DATA · CRAWLING",
    tagline: "Turns any hospital website into a structured 25-field record.",
    description:
      "A universal hospital-website intelligence extractor. Crawls a hospital site, extracts structured records, and projects them onto a canonical 25-field master intake form in CSV/XLSX.",
    architecture: [
      "crawler/ — fetch, classify by URL + content signals, crawl loop",
      "extraction/ — per-category extractors plus engine.build_dataset",
      "processing/ — normalize, deduplicate, validate, conflict detection",
      "schema/ — canonical categories, field mapping, intake schema, quality",
      "export/ — master CSV/XLSX outputs + quality/provenance workbook",
      "models/ — Pydantic records, dataset container, intake model",
    ],
    implementation:
      "Eleven canonical categories feed the intake: identity & contacts, services, clinical, and credentials. Booleans are resolved to yes/no/unknown via weighted evidence, and every exported row traces back to provenance.",
    challenges: [
      "Normalizing wildly different hospital sites onto one output contract.",
      "Resolving boolean evidence with weights instead of guesses.",
      "Enforcing a typed Pydantic model end-to-end so the intake never drifts.",
    ],
    results: [
      "One command produces a JSON dataset plus master CSV/XLSX and a quality report.",
      "Schema-driven single output contract — one row per hospital.",
      "Typed models, ruff + mypy checks, and a pytest suite.",
    ],
    technologies: ["Python", "Pydantic", "Pandas", "Crawler", "CSV/XLSX", "pytest"],
    github: "https://github.com/kartik00052/hospital-website-extractor",
    art: "extractor",
  },
  {
    slug: "message-intelligence",
    number: "05",
    title: "Message Intelligence",
    year: "2026",
    category: "NLP · PRIVACY",
    tagline: "A hybrid, privacy-first message classification pipeline.",
    description:
      "Ingests a 900-message CSV, detects and masks sensitive information, classifies every message into one of six categories, extracts tasks and events, and serves results through a FastAPI dashboard — fully offline by default.",
    solution:
      "A fully deterministic, offline pipeline by default. An optional LLM fallback can be enabled for low-confidence classifications, and it only ever receives masked text.",
    architecture: [
      "Ingest — schema, size, ID, timestamp and ordering validation",
      "Sensitive-info detection — 14 sensitive types, masked before anything else touches the message",
      "Classification — every message into exactly one of six categories with confidence + reason",
      "Extraction — tasks, meetings, events, reminders with dates, deadlines and priority",
      "Validation — every artifact scanned for sensitive-value leaks",
      "Serve — sanitized results through a FastAPI dashboard",
    ],
    implementation:
      "No answer labels are used; every category and extraction is derived from message content itself. The repo commits only Fernet-encrypted dataset blobs and never sends raw text anywhere.",
    challenges: [
      "Masking sensitive values before any downstream stage sees raw content.",
      "Extracting multiple explicit deadlines from one message as separate tasks.",
      "Keeping the pipeline deterministic and offline while supporting an optional LLM fallback.",
    ],
    results: [
      "End-to-end pipeline with strict privacy guarantees.",
      "Dashboard serving sanitized results with documented deployment.",
      "Fully typed, validated artifacts end to end.",
    ],
    technologies: ["Python", "FastAPI", "Pydantic", "Crypto", "Pandas"],
    github: "https://github.com/kartik00052/message_intelligence",
    art: "message",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

export function getNextProject(slug: string): Project | undefined {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  return PROJECTS[(index + 1) % PROJECTS.length];
}
