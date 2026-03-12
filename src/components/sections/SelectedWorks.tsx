"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionShell } from "@/components/common/SectionShell";
import { portfolioConfig } from "@/config/portfolio";
import type { Project } from "@/domain/portfolio/types";
import { resolvePortfolioIcon } from "@/lib/iconRegistry";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55 },
  },
};

const GithubIcon = resolvePortfolioIcon("Github");
const LiveIcon = resolvePortfolioIcon("Globe");

export function SelectedWorks() {
  return (
    <SectionShell
      id="works"
      title={portfolioConfig.sections.selectedWorks.title}
      label="// SELECTED WORKS"
      titleClassName="text-[clamp(2.5rem,5vw,3.5rem)] font-light tracking-[0.2em] text-white uppercase"
      titleUnderlineClassName="h-px bg-linear-to-r from-cyan-400 to-transparent mt-2 mb-16 w-40"
      underlineWidth={160}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {portfolioConfig.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </SectionShell>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl h-64 md:h-80 cursor-pointer ${project.gridSpan}`}
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${project.image}')`,
          backgroundPosition: "center",
        }}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/80" />
      </motion.div>

      <div
        className={`absolute top-0 left-0 right-0 h-px bg-linear-to-r ${project.accentGradient}`}
      />

      <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
        <div>
          <motion.p
            className="text-[9px] tracking-[0.35em] text-cyan-400/60 uppercase font-mono mb-3"
            initial={{ opacity: 0.6 }}
          >
            {project.category}
          </motion.p>
          <motion.h3 className="text-xl md:text-2xl font-semibold text-white/88 tracking-tight">
            {project.title}
          </motion.h3>
        </div>

        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-between p-6 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: isHovered ? "auto" : "none" }}
        >
          <div>
            <motion.p
              className="text-[9px] tracking-[0.35em] text-cyan-400/60 uppercase font-mono mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.category}
            </motion.p>
            <motion.h3
              className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-[13px] text-white/70 leading-relaxed line-clamp-3"
              initial={{ opacity: 0, y: 10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {project.description}
            </motion.p>
          </div>

          <motion.div
            className="flex gap-4 items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400/70 hover:text-cyan-300 transition-colors"
              whileHover={{ x: 4 }}
            >
              <GithubIcon className="w-4 h-4" />
              <span className="text-[12px] font-medium">GitHub</span>
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400/70 hover:text-cyan-300 transition-colors"
              whileHover={{ x: 4 }}
            >
              <LiveIcon className="w-4 h-4" />
              <span className="text-[12px] font-medium">Live</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
