"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Tighter bottom margin when nested inside cards (e.g. contact). */
  spacing?: "default" | "compact";
};

export function SectionHeader({ eyebrow, title, description, spacing = "default" }: Props) {
  const marginClass = spacing === "compact" ? "mb-7 md:mb-8" : "mb-10 md:mb-11";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.995 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.32 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`${marginClass} max-w-3xl`}
    >
      <p className="section-eyebrow mb-4">{eyebrow}</p>
      <h2 className="section-title-xl">{title}</h2>
      {description ? (
        <p className="mt-5 max-w-prose text-pretty text-[15px] leading-[1.68] text-text/76 md:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
