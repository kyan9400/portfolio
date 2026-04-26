/**
 * Manual project catalog (no GitHub API). Replace `github` with repo URLs when
 * you publish code; add `live` when a deployment exists.
 */
export type Project = {
  slug: string;
  title: string;
  /** One-line context under the title, e.g. "Fullstack System · Admin Dashboard" */
  rolePurpose: string;
  description: string;
  longDescription: string;
  /** 3–4 bullets: what the product does before the narrative */
  whatItDoes: string[];
  tech: string[];
  github: string;
  live?: string;
  /** Optional badge on the detail hero, e.g. "Production system" */
  kindBadge?: string;
  /** Optional image in `/public`, e.g. `"/projects/okkp.webp"` */
  image?: string;
  /** Short case-study fields for card and detail page */
  problem?: string;
  solution?: string;
  result?: string;
};

export const projects: Project[] = [
  {
    slug: "okkp-platform",
    title: "OKKP Operations Platform",
    rolePurpose: "Fullstack platform · Operations & reporting",
    description:
      "Full-stack operational platform with modular services, clear API boundaries, and dashboard-driven workflows.",
    whatItDoes: [
      "Role-aware dashboards for day-to-day operations and KPIs",
      "Modular Node.js APIs with explicit contracts per domain",
      "PostgreSQL tuned for reporting reads and operational writes",
      "Background jobs for sync, alerts, and cross-workflow traceability"
    ],
    longDescription:
      "Operations teams were juggling fragmented tools and slow reporting paths. The goal was a single coherent platform: role-aware dashboards, predictable APIs, and a data model that could support both day-to-day work and analytics.\n\nI worked across the stack—Next.js/React for the UI, Node.js services with domain-shaped modules, and PostgreSQL tuned for reporting reads plus background jobs for sync and alerts. Read and write paths were separated to keep latency stable under load, contracts were standardized for easier integration and testing, and event-style logging was added so issues could be traced across workflows.\n\nThe result was less friction for operators, faster reporting cycles, and a codebase structure that made product iteration safer for the business teams relying on it.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "System Design"],
    github: "https://github.com/kyan9400",
    kindBadge: "Production system",
    image: "/images/projects/okkp-platform.svg",
    problem: "Operations teams juggled fragmented tools and slow reporting paths with no single coherent view.",
    solution: "Built a role-aware platform with modular Node.js APIs, separated read/write paths, and event-style logging.",
    result: "Reduced reporting cycle time, stabilized production load, and made product iteration safer."
  },
  {
    slug: "document-intelligence-rag",
    title: "Document Intelligence (RAG)",
    rolePurpose: "AI retrieval · Internal knowledge",
    description:
      "Retrieval-augmented search over large internal documents with ranking, citations, and LLM-grounded answers.",
    whatItDoes: [
      "Ingestion pipeline: chunking, metadata, and embeddings",
      "Hybrid retrieval tuned for domain terminology",
      "LLM answers with citations and guardrailed prompts",
      "Web UI for queries, follow-ups, and inspecting sources"
    ],
    longDescription:
      "Internal knowledge lived in long PDFs and policy docs; keyword search and ad-hoc ChatGPT paste-ins produced inconsistent, untraceable answers. The product direction was a trustworthy assistant: upload or index documents, ask questions in natural language, and get answers tied back to sources.\n\nI built the ingestion side—chunking, metadata extraction, and embeddings—then retrieval with hybrid search to handle domain vocabulary, an LLM layer that formats answers with citations, and guardrails around prompts and outputs. The web UI supports follow-up questions and exploring retrieved chunks so users can verify what the model saw.\n\nLookup time dropped from minutes of manual reading to seconds, and teams gained a single interface they could rely on for decision support instead of guessing which document was current.",
    tech: ["Python", "LLM", "RAG", "Vector Search"],
    github: "https://github.com/kyan9400",
    kindBadge: "Production system",
    image: "/images/projects/document-rag.svg",
    problem: "Internal knowledge lived in long PDFs; keyword search produced inconsistent, untraceable answers.",
    solution: "RAG pipeline with hybrid retrieval, LLM answers with citations, and a web UI for querying sources.",
    result: "Lookup time dropped from minutes to seconds, with a single trustworthy interface for decisions."
  },
  {
    slug: "ai-dashboard-suite",
    title: "AI-Driven Analytics Dashboards",
    rolePurpose: "Analytics product · Live KPIs & AI assist",
    description:
      "Live operational dashboards with multi-source aggregation and an AI panel for summaries and anomaly hints.",
    whatItDoes: [
      "Interactive dashboards with filterable KPI modules",
      "Aggregation APIs that normalize multiple upstream sources",
      "Transforms and trend pipelines with precomputed hot paths",
      "AI side panel for summaries and anomaly hints without clutter"
    ],
    longDescription:
      "Stakeholders were living in static exports and one-off spreadsheets, which delayed operational decisions and hid trends until someone manually refreshed a report. The ask was interactive dashboards that stay current and reduce the cognitive load of scanning raw KPIs.\n\nI implemented a React front end with filterable KPI modules, an aggregation API that normalizes multiple upstream sources, and a pipeline for transforms and trend calculations. High-traffic views use precomputed aggregates; resilient fallbacks prevent empty states when a source blips. A side AI helper summarizes what changed and surfaces anomaly hints using progressive disclosure so dense analytics stay readable.\n\nKPI reviews got faster, manual reporting work dropped, and conversations shifted from \"where is the number?\" to \"what should we do about it?\"",
    tech: ["React", "Node.js", "Analytics", "Automation"],
    github: "https://github.com/kyan9400",
    kindBadge: "Production system",
    image: "/images/projects/ai-dashboard-suite.svg",
    problem: "Stakeholders relied on static exports and spreadsheets, delaying operational decisions and hiding trends.",
    solution: "React dashboards with filterable KPI modules, aggregation APIs, and an AI panel for anomaly hints.",
    result: "KPI reviews got faster, manual reporting dropped, conversations shifted from 'where is the number?' to decisions."
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
