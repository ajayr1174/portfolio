"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { portfolioConfig } from "@/config/portfolio";

const NAV_LINKS = portfolioConfig.footerLinks.map((link) => ({
  href: link.href,
  label: link.label,
}));

const SCROLL_THRESHOLD = 40;

const navContainerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const linkVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: 0.4 + i * 0.06, duration: 0.4 },
  }),
};

const hireMeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.7, duration: 0.4 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.07, duration: 0.35 },
  }),
};

function HireMeButton({
  className = "",
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "lg";
}) {
  const isLarge = size === "lg";
  return (
    <motion.a
      href="#hire"
      variants={size === "sm" ? hireMeVariants : undefined}
      initial={size === "sm" ? "hidden" : false}
      animate={size === "sm" ? "visible" : false}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center rounded-full border border-cyan-400/50 text-cyan-300 transition-colors duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-white ${
        isLarge ? "px-8 py-3 text-base" : "px-4 py-1.5 text-sm"
      } ${className}`}
      data-cursor="interactive"
    >
      Hire Me
    </motion.a>
  );
}

function MobileMenuOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-100 flex flex-col bg-black/95 backdrop-blur-xl"
      aria-modal="true"
      role="dialog"
      aria-label="Mobile menu"
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-10 px-8">
        {NAV_LINKS.map((link, i) => (
          <motion.div
            key={link.href}
            variants={mobileLinkVariants}
            custom={i}
            initial="hidden"
            animate="visible"
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="text-4xl font-light text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center pb-16">
        <HireMeButton size="lg" />
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="absolute right-8 top-6 text-white transition-opacity hover:opacity-80"
        data-cursor="interactive"
      >
        <X size={28} strokeWidth={1.5} />
      </button>
    </motion.div>
  );
}

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        variants={navContainerVariants}
        initial="hidden"
        animate="visible"
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-6 text-white transition-all duration-500 ${
          isScrolled
            ? "bg-black/30 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <Link 
          href="/"
          className="group relative flex items-center font-mono text-lg font-bold tracking-tighter"
        >
          <span className="text-white/40 transition-colors group-hover:text-cyan-400/80 mr-1">&lt;</span>
          <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-white group-hover:to-cyan-300">
            Ajay
          </span>
          <span className="text-cyan-400 transition-colors group-hover:text-white ml-1">/&gt;</span>
          <motion.span 
            className="ml-1.5 h-4 w-1.5 bg-cyan-400"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, i) => (
            <motion.span
              key={link.href}
              variants={linkVariants}
              custom={i}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={link.href}
                className="relative text-sm font-light text-white/60 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            </motion.span>
          ))}
          <HireMeButton />
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="flex items-center justify-center text-white md:hidden"
          data-cursor="interactive"
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>
      </motion.header>

      <AnimatePresence mode="wait">
        {menuOpen && (
          <MobileMenuOverlay
            key="mobile-menu"
            onClose={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
