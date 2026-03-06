"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { portfolioConfig } from "@/config/portfolio";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Experience() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [spineWidth, setSpineWidth] = useState(0);

  return (
    <motion.section
      className="relative w-full py-24"
      style={{
        background: `radial-gradient(circle at 30% 60%, rgba(31, 41, 55, 0.3) 0, transparent 55%), radial-gradient(circle at 70% 20%, rgba(11, 17, 32, 0.3) 0, transparent 55%), #070A0E`,
      }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-light tracking-[0.25em] text-white uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Education & Experience
          </motion.h2>
          <motion.div
            className="w-16 h-px bg-cyan-400/60 mt-3"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </div>

        {/* Timeline Container */}
        <div className="relative py-12 px-4 md:px-0 overflow-x-auto md:overflow-x-visible">
          {/* Central Spine Line */}
          <motion.div
            className="absolute left-1/2 top-0 h-full w-px bg-white/15 -translate-x-1/2"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.2, ease: "easeInOut" }}
          />

          {/* Timeline Entries */}
          <div className="relative flex flex-col gap-8 md:gap-12">
            {portfolioConfig.timeline.map((entry, index) => (
              <TimelineEntry
                key={entry.id}
                entry={entry}
                index={index}
                isActive={activeId === entry.id}
                onHover={setActiveId}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

interface TimelineEntryProps {
  entry: (typeof portfolioConfig.timeline)[0];
  index: number;
  isActive: boolean;
  onHover: (id: number | null) => void;
}

function TimelineEntry({
  entry,
  index,
  isActive,
  onHover,
}: TimelineEntryProps) {
  const isTop = entry.position === "top";

  return (
    <motion.div
      className={`relative flex flex-col items-center ${isTop ? "md:flex-row-reverse" : "md:flex-row"}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      onMouseEnter={() => onHover(entry.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Vertical connector line */}
      <motion.div
        className={`w-[1px] h-8 bg-white/20 ${isTop ? "order-first mb-2" : "order-last mt-2"}`}
        initial={{ height: 0 }}
        whileInView={{ height: 32 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
      />

      {/* Center Dot */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 + index * 0.15, duration: 0.4 }}
      >
        <div
          className={`w-3 h-3 rounded-full bg-cyan-400 ring-4 transition-all duration-200 ${
            isActive ? "ring-8 ring-cyan-400/40 scale-125" : "ring-cyan-400/20"
          }`}
        />

        {/* Pulsing animation for active dot */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-full bg-cyan-400/30"
            animate={{ scale: [1, 2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Content */}
      <div
        className={`w-full md:w-1/2 flex justify-center ${isTop ? "order-last" : "order-first"}`}
      >
        <motion.div
          className="text-center max-w-[180px] px-4"
          initial={{ opacity: 0, x: isTop ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
        >
          <h3 className="text-sm font-semibold text-white/80">{entry.title}</h3>
          <p className="text-xs text-white/40 mt-1 leading-[1.5]">
            {entry.subtitle}
          </p>

          {/* Tooltip */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                className="text-xs text-white/60 mt-2 p-2 rounded-lg bg-white/5 border border-white/10"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {entry.description}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
