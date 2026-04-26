"use client";

import Image from "next/image";
import Link from "next/link";
import { usePortfolioStore } from "@/store/portfolioStore";
import { copyByLocale } from "@/lib/copy";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
};

export function ProjectDetailClient({ project }: Props) {
  const { locale } = usePortfolioStore();
  const copy = copyByLocale[locale];

  const paragraphs = project.longDescription
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="relative z-10 mx-auto max-w-4xl px-4 py-10 md:py-20">
      <Link
        href="/#projects"
        className="project-back-link pill mb-12 inline-flex items-center gap-2 text-text/80 hover:text-text"
      >
        <span className="project-back-link-inner inline-flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {copy.projectBackLabel}
        </span>
      </Link>

      {project.image ? (
        <div className="relative mb-10 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-black/[0.06] shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)] dark:border-white/[0.08] dark:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65)] md:aspect-[2.4/1] md:rounded-[1.35rem]">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
      ) : null}

      <article className="glass px-7 pb-12 pt-10 md:px-12 md:pb-14 md:pt-12">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center gap-3 md:mb-10">
          <p className="section-eyebrow mb-0">{copy.projectsBadge}</p>
          {project.kindBadge ? (
            <span className="rounded-full border border-indigo-500/15 bg-indigo-500/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-indigo-700/90 dark:border-indigo-400/20 dark:bg-indigo-500/[0.08] dark:text-indigo-200/90">
              {project.kindBadge}
            </span>
          ) : null}
        </div>

        <header className="max-w-3xl space-y-4 md:space-y-5">
          <h1
            className="font-semibold leading-[1.08] tracking-[-0.03em] text-text"
            style={{ fontSize: "clamp(2.05rem, 5vw, 3.2rem)" }}
          >
            <span className="gradient-text">{project.title}</span>
          </h1>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">{project.rolePurpose}</p>
          <p className="text-base leading-relaxed text-text/78 md:text-lg md:leading-[1.65]">
            {project.description}
          </p>
        </header>

        <div className="my-12 h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-indigo-500/35 to-transparent md:my-14" />

        {/* Case study: Problem / Solution / Result */}
        {(project.problem || project.solution || project.result) ? (
          <section className="mb-12 md:mb-14">
            <div className="grid gap-5 sm:grid-cols-3">
              {project.problem ? (
                <div className="rounded-xl border border-black/[0.05] bg-surface/25 p-4 dark:border-white/[0.07] dark:bg-surface/15">
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-200/85">
                    {copy.projectProblemLabel}
                  </p>
                  <p className="text-[13.5px] leading-relaxed text-text/80">{project.problem}</p>
                </div>
              ) : null}
              {project.solution ? (
                <div className="rounded-xl border border-black/[0.05] bg-surface/25 p-4 dark:border-white/[0.07] dark:bg-surface/15">
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-200/85">
                    {copy.projectSolutionLabel}
                  </p>
                  <p className="text-[13.5px] leading-relaxed text-text/80">{project.solution}</p>
                </div>
              ) : null}
              {project.result ? (
                <div className="rounded-xl border border-black/[0.05] bg-surface/25 p-4 dark:border-white/[0.07] dark:bg-surface/15">
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-300/85">
                    {copy.projectResultLabel}
                  </p>
                  <p className="text-[13.5px] leading-relaxed text-text/80">{project.result}</p>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        {/* What it does */}
        <section className="mb-12 md:mb-14">
          <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-200/85">
            {copy.projectWhatItDoesLabel}
          </h2>
          <ul className="max-w-2xl space-y-3.5 text-[0.9375rem] leading-relaxed text-text/82">
            {project.whatItDoes.map((line, i) => (
              <li key={i} className="flex gap-3.5">
                <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-teal-400 opacity-80" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Long description */}
        <section className="mb-12 md:mb-14">
          <h2 className="sr-only">Overview</h2>
          <div className="max-w-2xl space-y-5">
            {paragraphs.map((block, i) => (
              <p key={i} className="leading-[1.78] text-text/86">{block}</p>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <div className="mb-12 md:mb-14">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-200/85">
            {copy.projectTechStackLabel}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <span key={tag} className="project-tech-tag project-tech-tag--detail">{tag}</span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 pt-1">
          {project.live ? (
            <a href={project.live} target="_blank" rel="noreferrer" className="pill pill-cta inline-flex items-center gap-2 font-medium">
              {copy.projectLiveDemo}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          ) : null}
          <a href={project.github} target="_blank" rel="noreferrer" className="pill pill-github-muted inline-flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.17a10.95 10.95 0 0 1 5.76 0c2.2-1.49 3.16-1.17 3.16-1.17.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.39-2.69 5.36-5.25 5.64.41.36.78 1.05.78 2.13v3.16c0 .31.21.68.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
            {copy.projectViewGithubLabel}
          </a>
        </div>
      </article>
    </div>
  );
}
