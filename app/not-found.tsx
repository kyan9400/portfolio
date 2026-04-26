"use client";

import Link from "next/link";
import { copyByLocale } from "@/lib/copy";
import { usePortfolioStore } from "@/store/portfolioStore";
import { AuroraBackground } from "@/components/AuroraBackground";

export default function NotFound() {
  const { locale } = usePortfolioStore();
  const copy = copyByLocale[locale];

  return (
    <main
      className="relative flex min-h-screen items-center justify-center px-4"
      dir={copy.dir}
    >
      <AuroraBackground />
      <div className="relative z-10 max-w-md text-center">
        <p className="section-eyebrow mb-4">404</p>
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          <span className="gradient-text">{copy.notFoundTitle}</span>
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-muted">
          {copy.notFoundBody}
        </p>
        <Link href="/" className="pill pill-cta inline-flex">
          {copy.notFoundCta}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
