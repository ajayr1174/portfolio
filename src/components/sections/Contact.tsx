"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {
  Mail,
  Github,
  Twitter,
  Linkedin,
  Send,
  CheckCircle2,
} from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, React.ComponentType<any>> = {
  Mail,
  Github,
  Twitter,
  Linkedin,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const envelopeVariants = {
  initial: { rotate: -12, opacity: 0.4 },
  animate: {
    rotate: -12,
    opacity: 0.5,
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
  hover: {
    rotate: 0,
    opacity: 0.8,
    transition: { duration: 0.4 },
  },
};

const shakeVariants = {
  shake: {
    x: [0, -4, 4, -4, 4, 0],
    transition: { duration: 0.4 },
  },
};

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formState.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setIsLoading(true);
    setStatus("loading");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setErrors({});

      setTimeout(() => {
        setStatus("idle");
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      setStatus("error");
      setIsLoading(false);
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <motion.div
      className="relative w-full"
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
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-light tracking-[0.25em] text-white uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {portfolioConfig.sections.contact.title}
          </motion.h2>

          <motion.div
            className="w-12 h-px bg-cyan-400/60"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </div>

        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Left: Contact Links + Icon */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Decorative Large Envelope Icon with Animation */}
            <motion.div
              className="text-[96px] text-white/15 select-none leading-none"
              initial="initial"
              whileHover="hover"
              animate="animate"
              variants={envelopeVariants}
            >
              ✉
            </motion.div>

            {/* Contact Links with Left Border Accent */}
            <div className="flex flex-col gap-4">
              {portfolioConfig.contactLinks.map((link) => {
                const IconComponent = iconMap[link.icon];
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-3 relative cursor-pointer"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent className="w-4 h-4 text-white/40 group-hover:text-cyan-400 transition-colors shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs text-white/35 group-hover:text-white/45 transition-colors">
                        {link.label}
                      </span>
                      <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                        {link.value}
                      </span>
                    </div>
                    <motion.div
                      className="absolute -left-3 top-0 bottom-0 w-1 bg-linear-to-b from-cyan-400 to-cyan-500/30 rounded-full opacity-0"
                      initial={{ opacity: 0, scaleY: 0 }}
                      whileHover={{ opacity: 1, scaleY: 1 }}
                      transition={{ duration: 0.2 }}
                      style={{ originY: 0 }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Contact Form with Glass Styling */}
          <motion.form
            ref={formRef}
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Name Input */}
            <motion.div
              className="relative"
              animate={errors.name ? { x: [-4, 4, -4, 4, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={formState.name}
                onChange={(e) => {
                  setFormState({ ...formState, name: e.target.value });
                  if (errors.name) {
                    setErrors({ ...errors, name: "" });
                  }
                }}
                className={`w-full bg-white/3 backdrop-blur-md border rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 transition-all duration-200 focus:outline-none ${
                  errors.name
                    ? "border-red-400/50 focus:border-red-400 focus:bg-red-500/5 focus:ring-1 focus:ring-red-400/30"
                    : "border-white/10 focus:border-cyan-400/50 focus:bg-white/5 focus:ring-1 focus:ring-cyan-400/20"
                }`}
              />
              {errors.name && (
                <motion.span
                  className="text-xs text-red-400/80 mt-1 block"
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.name}
                </motion.span>
              )}
            </motion.div>

            {/* Email Input */}
            <motion.div
              className="relative"
              animate={errors.email ? { x: [-4, 4, -4, 4, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={formState.email}
                onChange={(e) => {
                  setFormState({ ...formState, email: e.target.value });
                  if (errors.email) {
                    setErrors({ ...errors, email: "" });
                  }
                }}
                className={`w-full bg-white/3 backdrop-blur-md border rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 transition-all duration-200 focus:outline-none ${
                  errors.email
                    ? "border-red-400/50 focus:border-red-400 focus:bg-red-500/5 focus:ring-1 focus:ring-red-400/30"
                    : "border-white/10 focus:border-cyan-400/50 focus:bg-white/5 focus:ring-1 focus:ring-cyan-400/20"
                }`}
              />
              {errors.email && (
                <motion.span
                  className="text-xs text-red-400/80 mt-1 block"
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.email}
                </motion.span>
              )}
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              className="relative"
              animate={errors.message ? { x: [-4, 4, -4, 4, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows={3}
                value={formState.message}
                onChange={(e) => {
                  setFormState({ ...formState, message: e.target.value });
                  if (errors.message) {
                    setErrors({ ...errors, message: "" });
                  }
                }}
                className={`w-full bg-white/3 backdrop-blur-md border rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 transition-all duration-200 focus:outline-none resize-none ${
                  errors.message
                    ? "border-red-400/50 focus:border-red-400 focus:bg-red-500/5 focus:ring-1 focus:ring-red-400/30"
                    : "border-white/10 focus:border-cyan-400/50 focus:bg-white/5 focus:ring-1 focus:ring-cyan-400/20"
                }`}
              />
              {errors.message && (
                <motion.span
                  className="text-xs text-red-400/80 mt-1 block"
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.message}
                </motion.span>
              )}
            </motion.div>

            {/* Submit Button with Gradient and Loading State */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 relative overflow-hidden group mt-4 ${
                status === "success"
                  ? "bg-emerald-500/20 border border-emerald-400/40 text-emerald-300"
                  : status === "error"
                    ? "bg-red-500/20 border border-red-400/40 text-red-300"
                    : "bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-white hover:border-cyan-400/60 hover:from-cyan-500/30 hover:to-blue-500/30"
              }`}
              whileHover={!isLoading ? { scale: 1.02 } : {}}
              whileTap={!isLoading ? { scale: 0.98 } : {}}
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              {isLoading ? (
                <>
                  <motion.div
                    className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full relative z-10"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <span className="relative z-10">Sending...</span>
                </>
              ) : status === "success" ? (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <CheckCircle2 className="w-4 h-4 relative z-10" />
                  </motion.div>
                  <span className="relative z-10">Message Sent!</span>
                </>
              ) : (
                <>
                  <span className="relative z-10">Send Message</span>
                  <motion.div
                    initial={{ x: -2, opacity: 0 }}
                    whileHover={{ x: 2, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <Send className="w-4 h-4" />
                  </motion.div>
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
}
