"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, type MouseEvent } from "react";
import { SectionHeader } from "./SectionHeader";

type Layer = { label: string; detail: string };

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  layers: Layer[];
  layerPrefix: string;
  activeLabel: string;
  idleLabel: string;
  flowLabel: string;
};

const layerIcons = [
  (
    <svg key="ui" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 4v5" />
    </svg>
  ),
  (
    <svg key="api" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M8 6h8M6 8v8M18 8v8M8 18h8" />
    </svg>
  ),
  (
    <svg key="data" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  (
    <svg key="ai" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
      <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />
    </svg>
  )
];

const layerAccents = [
  "from-indigo-400/30 to-indigo-500/0 text-indigo-600 dark:text-indigo-200",
  "from-violet-400/30 to-violet-500/0 text-violet-600 dark:text-violet-200",
  "from-emerald-400/30 to-emerald-500/0 text-emerald-600 dark:text-emerald-200",
  "from-cyan-400/30 to-cyan-500/0 text-cyan-600 dark:text-cyan-200"
];

export function SystemMap({
  eyebrow,
  title,
  description,
  layers,
  layerPrefix,
  activeLabel,
  idleLabel,
  flowLabel
}: Props) {
  const [active, setActive] = useState(0);

  function handleMove(e: MouseEvent<HTMLButtonElement>) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    target.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <section id="systems" className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />

      <div className="layer-grid grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {layers.map((layer, idx) => {
          const isActive = active === idx;
          return (
            <motion.button
              key={layer.label}
              type="button"
              onMouseMove={handleMove}
              onMouseEnter={() => setActive(idx)}
              onFocus={() => setActive(idx)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.07, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`layer-card group relative rounded-2xl border p-5 text-left transition ${
                isActive
                  ? "border-indigo-400/40 bg-surface/[0.06]"
                  : "border-black/[0.06] bg-surface/25 hover:border-black/[0.10] dark:border-white/[0.10] dark:bg-surface/20 dark:hover:border-white/[0.14]"
              }`}
            >
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.06] bg-gradient-to-br dark:border-white/[0.10] ${layerAccents[idx]}`}>
                {layerIcons[idx]}
              </div>
              <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                {layerPrefix} 0{idx + 1}
              </div>
              <div className="mb-2 text-base font-semibold text-text">{layer.label}</div>
              <p className="text-sm leading-[1.65] text-muted">{layer.detail}</p>

              <div className="mt-4 flex items-center justify-between text-[11px] text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-indigo-500 shadow-[0_0_10px_currentColor]" : "bg-muted/50"}`} />
                  {isActive ? activeLabel : idleLabel}
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 transition group-hover:opacity-100">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="glass mt-6 flex flex-wrap items-center justify-between gap-4 p-5 text-sm"
        >
          <div className="text-text/90">
            <span className="font-semibold text-text">{layers[active]?.label}: </span>
            {layers[active]?.detail}
          </div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-indigo-600/85 dark:text-indigo-200/80">
            <span className="inline-block h-px w-8 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            {flowLabel}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
