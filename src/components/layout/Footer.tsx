"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { portfolioConfig } from "@/config/portfolio";

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, React.ComponentType<any>> = {
  Github,
  Linkedin,
  Twitter,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const sparkleVariants = {
  animate: {
    rotate: 360,
    y: [0, -8, 0],
  },
};

export function Footer() {
  return (
    <motion.footer
      className="relative w-full overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/5 to-cyan-500/10 pointer-events-none" />
      <div className="absolute inset-0 border-t border-cyan-400/20 pointer-events-none" />

      {/* Glass Tier 1 Container */}
      <div className="glass-tier-1 m-8 md:m-12 p-8 md:p-12">
        <div className="max-w-6xl mx-auto relative">
          {/* Row 1: Logo, Nav Links, Social Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-10">
            {/* Logo */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h2 className="text-lg md:text-xl font-light tracking-[0.3em] uppercase text-white/25">
                {portfolioConfig.footer.initials}
              </h2>
              <p className="text-xs text-white/20 tracking-wider mt-2">
                {portfolioConfig.footer.subtitle}
              </p>
            </motion.div>

            {/* Navigation Links with Separators */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-4 md:gap-6">
                {portfolioConfig.footerLinks.map((link, index) => (
                  <div key={link.href} className="flex items-center gap-4">
                    <Link
                      href={link.href}
                      className="text-xs md:text-sm text-white/50 hover:text-white/80 transition-colors duration-200 font-light uppercase tracking-wider"
                    >
                      {link.label}
                    </Link>
                    {index < portfolioConfig.footerLinks.length - 1 && (
                      <span className="text-white/15">·</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex items-center justify-start md:justify-end gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {portfolioConfig.socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-2 rounded-lg transition-all duration-200"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      initial={false}
                    />
                    <IconComponent
                      size={18}
                      className="relative z-10 text-white/50 group-hover:text-cyan-400 transition-colors duration-200"
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-8 md:my-10" />

          {/* Row 2: Copyright, Credits */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-white/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="font-light tracking-wide">
              {portfolioConfig.footer.copyright}
            </p>
            <p className="font-light italic text-white/20">
              Crafted with precision and care.
            </p>
          </motion.div>

          {/* Sparkle Animation - Bottom Right */}
          <motion.div
            className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-2xl text-cyan-400/20 pointer-events-none select-none"
            animate={{ rotate: 360, y: [0, -8, 0] }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            ✦
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
