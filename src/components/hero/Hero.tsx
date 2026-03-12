"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlassSkillGrid } from "@/components/ui/GlassSkillGrid";

const nameVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, duration: 0.7 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.35, duration: 0.6 },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.6 },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.65, duration: 0.5 },
  },
};

const sparkleEntrance = {
  hidden: { opacity: 0, rotate: -180 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { delay: 1, duration: 0.7 },
  },
};

export function Hero() {
  return (
    <main className="hero-bg relative flex min-h-screen items-stretch justify-center overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/assets/images/Gemini_Generated_Image_8yupl28yupl28yup.png"
          alt="Cinematic portrait background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/0" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 pb-16 pt-28 sm:px-8 md:px-12">
        <section
          className="flex max-w-md flex-col gap-3 md:absolute md:left-12 md:top-1/2 md:-translate-y-1/2 md:gap-4"
          aria-label="Intro"
        >
          <motion.h1
            className="font-display text-[clamp(3rem,6vw,4.5rem)] font-semibold leading-none tracking-[0.08em] text-white"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            Ajay Singh
          </motion.h1>

          <motion.h2
            className="text-[1.35rem] font-light leading-tight text-white"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Senior Software Engineer &amp; Systems Architect
          </motion.h2>

          <motion.p
            className="mt-2 text-[0.9rem] font-light leading-relaxed text-white/70"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
          >
            I design, build, and scale resilient, high-performance systems for
            global-scale products. Focus on clean architecture, performance
            engineering, and cloud infrastructure.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-4"
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
          >
            <a
              href="#works"
              className="group relative overflow-hidden p-px text-sm font-medium uppercase tracking-[0.16em] text-white transition-colors data-[cursor=interactive]:cursor-none"
              data-cursor="interactive"
            >
              <span className="pointer-events-none absolute inset-0 bg-cyan-400/45" />
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <rect
                  x="0.75"
                  y="0.75"
                  width="98.5"
                  height="38.5"
                  fill="none"
                  stroke="rgba(34, 211, 238, 1)"
                  strokeWidth="1.5"
                  pathLength="1"
                  strokeDasharray="0.12 0.88"
                  className="opacity-0 animate-[border-trace_1.4s_linear_infinite] [animation-play-state:paused] group-hover:opacity-100 group-hover:[animation-play-state:running]"
                />
              </svg>
              <span className="relative z-10 block bg-[#070A0E] px-5 py-2.5">
                View Selected Works
              </span>
            </a>

            <a
              href="/Ajay_Singh_Resume.pdf"
              download="Ajay_Singh_Resume.pdf"
              className="border-b border-transparent text-sm font-medium text-white/70 transition-colors hover:border-white hover:text-white"
              data-cursor="interactive"
            >
              Request Resume
            </a>
          </motion.div>
        </section>

        <div className="hidden md:absolute md:right-12 md:top-1/2 md:block md:-translate-y-1/2">
          <GlassSkillGrid />
        </div>

        <motion.span
          className="sparkle-orbit pointer-events-none absolute bottom-8 right-10 text-[28px] text-white/70"
          variants={sparkleEntrance}
          initial="hidden"
          animate="visible"
        >
          ✦
        </motion.span>
      </div>
    </main>
  );
}
