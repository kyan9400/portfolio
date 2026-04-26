"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

type Group = { name: string; items: string[] };

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  groups: Group[];
};

const accents = [
  "from-indigo-400/15",
  "from-violet-400/15",
  "from-emerald-400/15",
  "from-cyan-400/15",
  "from-slate-400/15"
];

function stackBannerSrc(index: number): string {
  const n = String(index + 1).padStart(2, "0");
  return `/images/skills/stack-${n}.svg`;
}

export function SkillsSection({ eyebrow, title, description, groups }: Props) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />

      <div className="grid gap-6 md:grid-cols-2 md:gap-5">
        {groups.map((group, idx) => {
          const banner = stackBannerSrc(idx);
          const stackLabel = `Stack ${String(idx + 1).padStart(2, "0")}`;

          return (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: "easeOut" }}
              className="group glass hoverable relative overflow-hidden p-0 ring-1 ring-black/[0.04] dark:ring-white/[0.07]"
            >
              {/* Must use !absolute: .glass > * sets position:relative and wins over `absolute` */}
              <div
                className={`pointer-events-none !absolute -right-12 -top-12 z-0 h-40 w-40 rounded-full bg-gradient-to-br ${accents[idx % accents.length]} to-transparent blur-2xl`}
              />
              <div
                className="relative z-[1] overflow-hidden rounded-t-[24px] border-b border-black/[0.06] bg-surface/25 dark:border-white/[0.08] dark:bg-white/[0.03]"
                aria-hidden="true"
              >
                <div className="relative aspect-[21/9] w-full sm:aspect-[16/5]">
                  <Image
                    src={banner}
                    alt=""
                    fill
                    className="object-cover object-center transition duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="relative z-[1] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full border border-black/[0.06] bg-surface/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted shadow-[0_1px_0_rgba(255,255,255,0.6)_inset] dark:border-white/[0.1] dark:bg-white/[0.04] dark:shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
                    {stackLabel}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-indigo-500/12 via-border/20 to-transparent dark:from-indigo-400/15" />
                </div>
                <h3 className="mb-4 text-lg font-semibold tracking-tight text-text">{group.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
