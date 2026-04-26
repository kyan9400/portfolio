"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { fadeUp, containerStagger } from "@/lib/motion";

type Architecture = { name: string; detail: string };
type Metric = { value: string; label: string };

type Props = {
  eyebrow: string;
  title: string;
  summary: string;
  problemTitle: string;
  problem: string;
  constraintsTitle: string;
  constraints: string[];
  solutionTitle: string;
  solution: string;
  architectureTitle: string;
  architecture: Architecture[];
  metricsTitle: string;
  metrics: Metric[];
  lessonsTitle: string;
  lessons: string[];
};

export function SignatureCase(props: Props) {
  const {
    eyebrow,
    title,
    summary,
    problemTitle,
    problem,
    constraintsTitle,
    constraints,
    solutionTitle,
    solution,
    architectureTitle,
    architecture,
    metricsTitle,
    metrics,
    lessonsTitle,
    lessons
  } = props;

  return (
    <section id="signature" className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <SectionHeader eyebrow={eyebrow} title={title} description={summary} />

      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-5 md:grid-cols-2"
      >
        <motion.article variants={fadeUp} className="glass p-6">
          <p className="section-eyebrow mb-3">{problemTitle}</p>
          <p className="text-sm leading-[1.65] text-text/90">{problem}</p>
        </motion.article>

        <motion.article variants={fadeUp} className="glass p-6">
          <p className="section-eyebrow mb-3">{constraintsTitle}</p>
          <ul className="space-y-2.5 text-sm text-text/90">
            {constraints.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article variants={fadeUp} className="glass p-6 md:col-span-2">
          <p className="section-eyebrow mb-3">{solutionTitle}</p>
          <p className="text-sm leading-[1.65] text-text/90">{solution}</p>
        </motion.article>

        <motion.article variants={fadeUp} className="glass p-6 md:col-span-2">
          <p className="section-eyebrow mb-4">{architectureTitle}</p>
          <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {architecture.map((row, idx) => (
              <li
                key={row.name}
                className="lift-surface relative rounded-xl border border-black/[0.06] bg-surface/25 p-4 dark:border-white/[0.10] dark:bg-surface/15"
              >
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                  0{idx + 1}
                </div>
                <div className="mb-1.5 text-sm font-semibold text-text">{row.name}</div>
                <p className="text-xs leading-[1.6] text-muted">{row.detail}</p>
              </li>
            ))}
          </ol>
        </motion.article>

        <motion.article variants={fadeUp} className="glass p-6 md:col-span-2">
          <p className="section-eyebrow mb-4">{metricsTitle}</p>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-black/[0.06] bg-surface/30 sm:grid-cols-4 dark:border-white/[0.10]">
            {metrics.map((m) => (
              <div key={m.label} className="bg-card/60 px-4 py-4 text-center">
                <div className="gradient-text-soft text-xl font-semibold tracking-tight">
                  {m.value}
                </div>
                <div className="mt-0.5 text-[11px] uppercase tracking-widest text-muted">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article variants={fadeUp} className="glass p-6 md:col-span-2">
          <p className="section-eyebrow mb-3">{lessonsTitle}</p>
          <ul className="space-y-2 text-sm leading-[1.65] text-text/90">
            {lessons.map((l, idx) => (
              <li key={l} className="flex items-start gap-3">
                <span className="mt-1 text-xs font-semibold text-indigo-600 dark:text-indigo-200/80">
                  0{idx + 1}
                </span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      </motion.div>
    </section>
  );
}
