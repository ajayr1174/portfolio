"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

const DEFAULT_BACKGROUND =
  "radial-gradient(circle at 30% 60%, rgba(31, 41, 55, 0.3) 0, transparent 55%), radial-gradient(circle at 70% 20%, rgba(11, 17, 32, 0.3) 0, transparent 55%), #070A0E";

interface SectionShellProps {
  id?: string;
  title: string;
  children: ReactNode;
  containerClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  titleUnderlineClassName?: string;
  sectionClassName?: string;
  label?: string;
  headingClassName?: string;
  underlineWidth?: number;
}

export function SectionShell({
  id,
  title,
  children,
  containerClassName = "max-w-6xl mx-auto px-8",
  contentClassName,
  titleClassName = "text-3xl md:text-4xl font-light tracking-[0.25em] text-white uppercase",
  titleUnderlineClassName = "w-12 h-px bg-cyan-400/60 mt-3",
  sectionClassName = "relative w-full py-24",
  label,
  headingClassName = "flex flex-col items-center mb-16",
  underlineWidth = 48,
}: SectionShellProps) {
  return (
    <motion.section
      className={sectionClassName}
      style={{ background: DEFAULT_BACKGROUND }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <div className={containerClassName}>
        {label ? (
          <motion.p
            className="text-[11px] text-cyan-400/50 tracking-[0.4em] uppercase mb-3 font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {label}
          </motion.p>
        ) : null}

        <div className={headingClassName}>
          <motion.h2
            className={titleClassName}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.div
            className={titleUnderlineClassName}
            initial={{ width: 0 }}
            whileInView={{ width: underlineWidth }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </div>

        <div className={contentClassName}>{children}</div>
      </div>
    </motion.section>
  );
}
