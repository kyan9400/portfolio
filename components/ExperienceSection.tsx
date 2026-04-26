"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

type Item = { period: string; title: string; company: string; impact: string };

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  items: Item[];
};

export function ExperienceSection({ eyebrow, title, description, items }: Props) {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />

      <div className="timeline space-y-5">
        {items.map((item, idx) => (
          <motion.div
            key={item.period + item.company}
            className="timeline-item"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
          >
            <div className="glass hoverable p-6">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-200/85">
                  {item.period}
                </span>
                <span className="rounded-full border border-black/[0.04] bg-surface/30 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-muted dark:border-white/[0.07]">
                  {item.company}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-[1.65] text-text/90">
                {item.impact}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
