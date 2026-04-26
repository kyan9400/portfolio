"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { SectionHeader } from "./SectionHeader";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  projects: Project[];
  badgeLabel: string;
  emptyLabel: string;
  problemLabel: string;
  solutionLabel: string;
  resultLabel: string;
  viewCaseStudy: string;
  liveDemo: string;
  viewGithub: string;
};

export function ProjectsSection({
  eyebrow,
  title,
  description,
  projects,
  badgeLabel,
  emptyLabel,
  problemLabel,
  solutionLabel,
  resultLabel,
  viewCaseStudy,
  liveDemo,
  viewGithub
}: Props) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />

      {projects.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border/20 bg-surface/[0.03] px-8 py-14 text-center text-sm leading-relaxed text-text/70">
          {emptyLabel}
        </p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: "easeOut" }}
              className="project-card group/card flex h-full flex-col"
            >
              <div className="project-card-inner relative flex h-full flex-col">
                <div className="project-card-accent" aria-hidden />

                {project.image ? (
                  <div className="relative -mx-[1.35rem] -mt-[1.35rem] mb-3 aspect-[16/10] w-[calc(100%+2.7rem)] max-w-none overflow-hidden rounded-t-[20px] border-b border-black/[0.06] bg-surface/35 ring-1 ring-inset ring-black/[0.05] dark:border-white/[0.08] dark:bg-white/[0.04] dark:ring-white/[0.06]">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : null}

                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-200/90">
                    {badgeLabel}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-muted">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-[1.125rem] font-semibold leading-snug tracking-[-0.02em] text-text md:text-xl">
                  {project.title}
                </h3>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                  {project.rolePurpose}
                </p>

                {/* Case study structured fields */}
                {(project.problem || project.solution) ? (
                  <div className="mt-3 space-y-2">
                    {project.problem ? (
                      <div>
                        <span className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-indigo-600/80 dark:text-indigo-300/70">
                          {problemLabel}
                        </span>
                        <p className="mt-0.5 line-clamp-2 text-[12.5px] leading-relaxed text-text/70">
                          {project.problem}
                        </p>
                      </div>
                    ) : null}
                    {project.solution ? (
                      <div>
                        <span className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-indigo-600/80 dark:text-indigo-300/70">
                          {solutionLabel}
                        </span>
                        <p className="mt-0.5 line-clamp-2 text-[12.5px] leading-relaxed text-text/70">
                          {project.solution}
                        </p>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <p className="mt-2 line-clamp-3 text-sm leading-[1.68] text-text/75">{project.description}</p>
                )}

                {/* Tech tags */}
                <div className="mt-3.5 flex flex-wrap gap-1">
                  {project.tech.slice(0, 5).map((tag) => (
                    <span key={tag} className="project-tech-tag">{tag}</span>
                  ))}
                </div>

                {/* Result badge */}
                {project.result ? (
                  <div className="mt-3 rounded-lg border border-emerald-500/15 bg-emerald-500/[0.05] px-3 py-2 dark:border-emerald-400/12 dark:bg-emerald-400/[0.05]">
                    <p className="text-[11px] leading-relaxed text-emerald-700/85 dark:text-emerald-300/80">
                      <span className="font-semibold">{resultLabel}:</span> {project.result}
                    </p>
                  </div>
                ) : null}

                {/* Action buttons */}
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="pill pill-cta py-2 text-[11px] font-medium"
                  >
                    {viewCaseStudy}
                  </Link>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="pill py-2 text-[11px] font-medium"
                    >
                      {liveDemo}
                    </a>
                  ) : null}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="pill pill-github-muted py-2 text-[11px] font-medium"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.17a10.95 10.95 0 0 1 5.76 0c2.2-1.49 3.16-1.17 3.16-1.17.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.39-2.69 5.36-5.25 5.64.41.36.78 1.05.78 2.13v3.16c0 .31.21.68.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                    </svg>
                    {viewGithub}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
}
