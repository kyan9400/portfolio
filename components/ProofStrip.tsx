"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type Props = {
  label: string;
  items: string[];
};

export function ProofStrip({ label, items }: Props) {
  return (
    <motion.section
      aria-label={label}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="proof-strip mx-auto max-w-6xl px-4"
    >
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-y border-black/[0.04] py-4 text-[11px] uppercase tracking-[0.22em] text-muted dark:border-white/[0.07]">
        <span className="text-muted/80">{label}</span>
        <span className="hidden h-3 w-px bg-border/15 sm:inline-block" />
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {items.map((item, idx) => (
            <li key={item} className="flex items-center gap-3">
              <span className="text-text/80">{item}</span>
              {idx < items.length - 1 ? (
                <span aria-hidden="true" className="text-muted/60">
                  ·
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
