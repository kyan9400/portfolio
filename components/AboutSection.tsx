"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const ABOUT_IMAGE = "/images/about-editorial.svg";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  highlights: { label: string; value: string }[];
  focusTitle: string;
  focusItems: string[];
};

export function AboutSection({
  eyebrow,
  title,
  body,
  highlights,
  focusTitle,
  focusItems
}: Props) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="glass hoverable p-7 lg:col-span-3"
        >
          <div
            className="relative mb-6 aspect-[2/1] w-full overflow-hidden rounded-xl border border-black/[0.06] dark:border-white/[0.08]"
            aria-hidden="true"
          >
            <Image
              src={ABOUT_IMAGE}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
          <p className="text-base leading-[1.65] text-text/90">{body}</p>
          <div className="mt-7 grid grid-cols-2 gap-3">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-xl border border-black/[0.06] bg-surface/30 p-4 dark:border-white/[0.10]">
                <div className="text-[11px] uppercase tracking-widest text-indigo-600/85 dark:text-indigo-200/80">{h.label}</div>
                <div className="mt-1 text-sm font-medium text-text">{h.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          className="glass hoverable relative overflow-hidden p-7 lg:col-span-2"
        >
          <div className="pointer-events-none !absolute -right-12 -top-12 z-0 h-44 w-44 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="pointer-events-none !absolute -bottom-16 -left-10 z-0 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="relative z-[1]">
            <p className="section-eyebrow mb-4">{focusTitle}</p>
            <ul className="space-y-3">
              {focusItems.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-text/90">
                  <span className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
