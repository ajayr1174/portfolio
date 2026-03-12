"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/common/SectionShell";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiPostgresql,
  SiWebdriverio,
  SiCucumber,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiOpensearch,
  SiRedis,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45 },
  },
};

interface Skill {
  icon: React.ReactNode;
  label: string;
  color: string;
}

interface Category {
  name: string;
  label: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    name: "Languages",
    label: "// LANGUAGES",
    skills: [
      { icon: <SiTypescript />, label: "TypeScript", color: "#3178c6" },
      { icon: <SiJavascript />, label: "JavaScript", color: "#f7df1e" },
      { icon: <FaJava />, label: "Java", color: "#f89820" },
    ],
  },
  {
    name: "Frontend",
    label: "// FRONTEND",
    skills: [
      { icon: <SiReact />, label: "React", color: "#61dafb" },
      { icon: <SiNextdotjs />, label: "Next.js", color: "#ffffff" },
      { icon: <SiTailwindcss />, label: "Tailwind", color: "#38bdf8" },
    ],
  },
  {
    name: "Backend & Data",
    label: "// BACKEND & DATA",
    skills: [
      { icon: <SiPostgresql />, label: "PostgreSQL", color: "#336791" },
      { icon: <SiRedis />, label: "Redis", color: "#ff4438" },
      { icon: <SiOpensearch />, label: "OpenSearch", color: "#005eb8" },
    ],
  },
  {
    name: "Cloud & DevOps",
    label: "// CLOUD & DEVOPS",
    skills: [
      { icon: <TbBrandAzure />, label: "Azure", color: "#0078d4" },
      { icon: <FaAws />, label: "AWS", color: "#ff9900" },
      { icon: <SiDocker />, label: "Docker", color: "#2496ed" },
    ],
  },
  {
    name: "Tooling",
    label: "// TOOLING & TESTING",
    skills: [
      { icon: <SiWebdriverio />, label: "WebdriverIO", color: "#ea5906" },
      { icon: <SiCucumber />, label: "Cucumber", color: "#23d96c" },
      { icon: <SiGithubactions />, label: "GitHub Actions", color: "#2088ff" },
      { icon: <SiGit />, label: "Git", color: "#f05032" },
      { icon: <VscAzureDevops />, label: "Azure DevOps", color: "#0078d4" },
    ],
  },
];

function SkillPill({ skill }: { skill: Skill }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.06,
        backgroundColor: "rgba(255,255,255,0.1)",
        borderColor: "rgba(255,255,255,0.22)",
        transition: { duration: 0.2 },
      }}
      className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/4 px-3.5 py-2.5 cursor-default select-none"
      data-cursor="interactive"
    >
      <span
        className="text-[22px] flex-shrink-0"
        style={{ color: skill.color, filter: `drop-shadow(0 0 6px ${skill.color}55)` }}
      >
        {skill.icon}
      </span>
      <span className="text-[12px] font-medium text-white/70 tracking-wide whitespace-nowrap">
        {skill.label}
      </span>
    </motion.div>
  );
}

function CategoryBlock({ category }: { category: Category }) {
  return (
    <motion.div
      className="flex flex-col gap-3"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-[9px] font-mono tracking-[0.35em] text-cyan-400/50 uppercase mb-1">
        {category.label}
      </p>
      <motion.div
        className="flex flex-wrap gap-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {category.skills.map((skill) => (
          <SkillPill key={skill.label} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export function TechStack() {
  return (
    <SectionShell
      id="stack"
      label="// TECH STACK"
      title="Tools & Technologies"
      titleClassName="text-[clamp(2rem,4vw,3rem)] font-light tracking-[0.2em] text-white uppercase"
      titleUnderlineClassName="h-px bg-linear-to-r from-cyan-400 to-transparent mt-2 mb-12 w-32"
      underlineWidth={128}
      headingClassName="flex flex-col items-center mb-12"
    >
      <div className="flex flex-col gap-10">
        {categories.map((cat) => (
          <CategoryBlock key={cat.name} category={cat} />
        ))}
      </div>
    </SectionShell>
  );
}
