"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

type CredibilityItem = { title: string; body: string };

type Props = {
  eyebrow: string;
  title: string;
  items: CredibilityItem[];
};

const ICONS = [
  // Stack / full-stack
  <svg key="stack" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m12 2 10 6.5v7L12 22 2 15.5v-7L12 2Z" />
    <path d="M12 22v-6.5M2 8.5l10 7 10-7" />
  </svg>,
  // Target / business
  <svg key="target" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>,
  // Zap / AI automation
  <svg key="zap" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
];

export function CredibilitySection({ eyebrow, title, items }: Props) {
  return (
    <section id="credibility" className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <SectionHeader eyebrow={eyebrow} title={title} />

      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
            className="flex flex-col gap-3 rounded-2xl border border-black/[0.06] bg-card/50 p-5 backdrop-blur-sm dark:border-white/[0.08] dark:bg-card/35"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-violet-500/10 text-indigo-600 ring-1 ring-indigo-500/15 dark:text-indigo-300 dark:ring-indigo-400/12">
              {ICONS[idx]}
            </div>
            <div>
              <h3 className="text-[0.9rem] font-semibold leading-snug text-text">{item.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-text/62">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
