"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/common/SectionShell";
import { portfolioConfig } from "@/config/portfolio";
import type { BlogPost } from "@/domain/portfolio/types";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Insights() {
  return (
    <SectionShell
      id="insights"
      title={portfolioConfig.sections.insights.title}
      sectionClassName="relative w-full"
      headingClassName="flex flex-col items-center mb-12"
      contentClassName=""
      titleClassName="text-3xl md:text-4xl font-light tracking-[0.2em] text-white uppercase"
      titleUnderlineClassName="w-12 h-px bg-cyan-400/60 mt-3 mx-auto"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {portfolioConfig.blog.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </motion.div>

      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.a
          href="#"
          className="text-cyan-400/60 hover:text-cyan-300 text-sm transition-colors flex items-center gap-2"
          whileHover={{ x: 4 }}
        >
          {portfolioConfig.sections.insights.viewAllLabel} →
        </motion.a>
      </motion.div>
    </SectionShell>
  );
}

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.a
      href="#"
      className="glass-tier-2 group relative p-4 flex flex-col min-h-40 cursor-pointer"
      variants={cardVariants}
      whileHover={{ y: -2 }}
    >
      <motion.div
        className="absolute left-0 top-20% bottom-20% w-0.5 rounded bg-linear-to-b from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />

      <p className="text-[9px] text-white/25 uppercase tracking-[0.3em] font-mono mb-2">
        Recent post
      </p>

      <h3 className="text-[13px] font-medium text-white/70 group-hover:text-cyan-300 mb-2 line-clamp-2 transition-colors">
        {post.title}
      </h3>

      <p className="text-[11px] text-white/35 line-clamp-3 leading-[1.65] mb-3 grow">
        {post.excerpt}
      </p>

      <div className="flex justify-between items-center">
        <p className="text-[10px] font-mono text-white/20">{post.timestamp}</p>
        <motion.span
          className="text-white/20 group-hover:text-cyan-400 transition-colors"
          whileHover={{ x: 3 }}
        >
          →
        </motion.span>
      </div>
    </motion.a>
  );
}
