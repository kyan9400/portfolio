"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/lib/types";
import { ThemeToggle } from "./ThemeToggle";

type NavSection = { id: string; label: string };

type Props = {
  sections: NavSection[];
  activeSection: string;
  locale: Locale;
  setLocale: (l: Locale) => void;
  brandMonogram: string;
  brandName: string;
  cvLabel: string;
  cvFile: string;
};

export function Navbar({
  sections,
  activeSection,
  locale,
  setLocale,
  brandMonogram,
  brandName,
  cvLabel,
  cvFile
}: Props) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      aria-label="Primary"
      className="sticky top-3 z-50 mx-auto mb-8 flex max-w-6xl flex-wrap items-center justify-between gap-3 rounded-full border border-black/10 bg-card/90 px-3 py-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_10px_28px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/[0.22] dark:bg-card/82 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45),0_1px_0_rgba(255,255,255,0.06)_inset]"
    >
      <div className="flex items-center gap-2 px-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-xs font-bold text-white shadow-lg shadow-indigo-500/30">
          {brandMonogram}
        </span>
        <span className="hidden text-sm font-semibold text-text sm:inline">
          {brandName}
          <span className="text-indigo-500 dark:text-indigo-300">.</span>
        </span>
      </div>

      <div className="order-3 flex flex-1 flex-wrap items-center justify-center gap-1 sm:order-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`nav-link ${activeSection === section.id ? "nav-active" : ""}`}
          >
            {section.label}
          </a>
        ))}
      </div>

      <div className="order-2 flex h-8 items-center gap-2 sm:order-3">
        <a
          href={cvFile}
          download
          className="hidden items-center gap-1.5 rounded-full border border-black/[0.06] bg-surface/40 px-2.5 py-1 text-[11px] font-semibold text-text/75 transition hover:bg-surface/65 hover:text-text sm:inline-flex dark:border-white/[0.08] dark:bg-surface/15 dark:hover:bg-surface/25"
          aria-label="Download CV"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
          </svg>
          {cvLabel}
        </a>
        <div className="flex h-8 items-center gap-0.5 rounded-full border border-black/[0.04] bg-surface/50 p-0.5 dark:border-white/[0.08] dark:bg-surface/20">
          {(["en", "ru", "ar"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setLocale(lang)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest transition ${
                locale === lang
                  ? "bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow shadow-indigo-500/30"
                  : "text-muted hover:text-text"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
