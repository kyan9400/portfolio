"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { containerStagger, fadeUp } from "@/lib/motion";

type Item = { title: string; body: string };

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  items: Item[];
};

export function HowIWork({ eyebrow, title, description, items }: Props) {
  return (
    <section id="how-i-work" className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />

      <motion.ul
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 sm:grid-cols-2"
      >
        {items.map((item, idx) => (
          <motion.li
            key={item.title}
            variants={fadeUp}
            className="lift-surface rounded-2xl border border-black/[0.06] bg-surface/30 p-6 dark:border-white/[0.10] dark:bg-surface/15"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-200/80">
                0{idx + 1}
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-border/15 to-transparent" />
            </div>
            <h3 className="text-base font-semibold text-text">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-[1.65] text-muted">{item.body}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
