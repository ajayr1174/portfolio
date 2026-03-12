"use client";

import { motion } from "framer-motion";
import {
  SiDocker,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";

const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.4, duration: 0.8 },
  },
};

const iconsContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.08,
    },
  },
};

const iconItem = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

type IconCellProps = {
  children: React.ReactNode;
  label?: string;
};

function IconCell({ children, label }: IconCellProps) {
  return (
    <motion.div
      variants={iconItem}
      whileHover={{
        scale: 1.12,
        filter: "drop-shadow(0 0 8px rgba(100,200,255,0.4))",
        transition: { duration: 0.25 },
      }}
      className="flex h-20 w-25 flex-col items-center justify-center gap-1"
      data-cursor="interactive"
    >
      <div className="text-[30px] text-white">{children}</div>
      {label ? (
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
          {label}
        </span>
      ) : null}
    </motion.div>
  );
}

export function GlassSkillGrid() {
  return (
    <motion.aside
      className="relative hidden w-70 min-h-80 rounded-2xl border border-white/10 bg-white/5 p-5 text-white shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl md:block"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.015,
        borderColor: "rgba(255,255,255,0.25)",
        backgroundColor: "rgba(255,255,255,0.08)",
        transition: { duration: 0.4 },
      }}
      data-cursor="interactive"
    >
      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/60">
        <span>Core Stack</span>
        <span>Systems & Cloud</span>
      </div>

      <motion.div
        className="grid grid-cols-2 grid-rows-4"
        variants={iconsContainer}
        initial="hidden"
        animate="visible"
      >
        <IconCell label="TypeScript">
          <SiTypescript />
        </IconCell>
        <IconCell label="Java">
          <FaJava />
        </IconCell>
        <IconCell label="React">
          <SiReact />
        </IconCell>
        <IconCell label="Azure">
          <TbBrandAzure />
        </IconCell>
        <IconCell label="Next">
          <SiNextdotjs />
        </IconCell>
        <IconCell label="Docker">
          <SiDocker />
        </IconCell>
        <IconCell label="Tailwind">
          <SiTailwindcss />
        </IconCell>
        <IconCell label="PostgreSQL">
          <SiPostgresql />
        </IconCell>
      </motion.div>

      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-white/10" />
    </motion.aside>
  );
}
