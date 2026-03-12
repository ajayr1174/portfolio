"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionShell } from "@/components/common/SectionShell";
import { portfolioConfig } from "@/config/portfolio";
import type { TimelineEntry as TimelineEntryModel } from "@/domain/portfolio/types";

export function Experience() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <SectionShell
      id="about"
      title={portfolioConfig.sections.experience.title}
      contentClassName="relative py-12 px-4 md:px-0 overflow-x-auto md:overflow-x-visible"
      titleClassName="text-3xl md:text-4xl font-light tracking-[0.25em] text-white uppercase"
      titleUnderlineClassName="w-16 h-px bg-cyan-400/60 mt-3"
      underlineWidth={64}
    >
      <motion.div
        className="absolute left-1/2 top-0 h-full w-px bg-white/15 -translate-x-1/2"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1.2, ease: "easeInOut" }}
      />

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
    </SectionShell>
  );
}

interface TimelineEntryProps {
  entry: TimelineEntryModel;
  index: number;
  isActive: boolean;
  onHover: (id: number | null) => void;
}

function TimelineEntry({ entry, index, isActive, onHover }: TimelineEntryProps) {
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
      <motion.div
        className={`w-[1px] h-8 bg-white/20 ${isTop ? "order-first mb-2" : "order-last mt-2"}`}
        initial={{ height: 0 }}
        whileInView={{ height: 32 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
      />

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

        {isActive ? (
          <motion.div
            className="absolute inset-0 rounded-full bg-cyan-400/30"
            animate={{ scale: [1, 2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        ) : null}
      </motion.div>

      <div
        className={`w-full md:w-1/2 flex justify-center ${isTop ? "order-last md:justify-start md:pl-12" : "order-first md:justify-end md:pr-12"}`}
      >
        <motion.div
          className="text-center md:text-left max-w-[400px] px-4 cursor-default w-full"
          initial={{ opacity: 0, x: isTop ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
          data-cursor="interactive"
        >
          <h3 className={`text-sm font-semibold transition-colors duration-300 ${isActive ? "text-cyan-300" : "text-white/80"}`}>{entry.title}</h3>
          <p className="text-xs text-white/40 mt-1 leading-[1.5]">{entry.subtitle}</p>

          <AnimatePresence>
            {isActive ? (
              <motion.div
                className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-[11px] text-white/60 mb-2 leading-relaxed flex items-start text-left gap-2">
                  <span className="text-cyan-400/50 mt-[2px] shrink-0 text-[10px]">▹</span>
                  <span>{entry.description}</span>
                </div>
                
                {entry.achievements && entry.achievements.length > 0 && (
                  <ul className="flex flex-col gap-2 mt-3">
                    {entry.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        className="text-[11px] text-white/60 leading-relaxed flex items-start text-left gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                      >
                        <span className="text-cyan-400/50 mt-[2px] shrink-0 text-[10px]">▹</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
