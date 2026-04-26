"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

type ServiceItem = { title: string; description: string };

type Props = {
  eyebrow: string;
  title: string;
  items: ServiceItem[];
};

const ICONS = [
  // Layers / SaaS
  <svg key="saas" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>,
  // AI / brain
  <svg key="ai" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z" />
  </svg>,
  // Dashboard / chart
  <svg key="dash" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>,
  // Globe / website
  <svg key="web" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
];

export function ServicesSection({ eyebrow, title, items }: Props) {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <SectionHeader eyebrow={eyebrow} title={title} />

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.07, ease: "easeOut" }}
            className="group flex gap-4 rounded-2xl border border-black/[0.06] bg-card/60 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/25 hover:shadow-md dark:border-white/[0.08] dark:bg-card/40 dark:hover:border-indigo-400/20"
          >
            <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-500/[0.08] text-indigo-600 ring-1 ring-indigo-500/15 transition-colors group-hover:bg-indigo-500/[0.14] dark:bg-indigo-400/[0.08] dark:text-indigo-300 dark:ring-indigo-400/15">
              {ICONS[idx]}
            </div>
            <div className="min-w-0">
              <h3 className="text-[0.9375rem] font-semibold leading-snug tracking-[-0.015em] text-text">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-text/65">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
