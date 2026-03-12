"use client";

import { motion } from "framer-motion";
import type { FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { SectionShell } from "@/components/common/SectionShell";
import { portfolioConfig } from "@/config/portfolio";
import { useContactForm } from "@/features/contact/useContactForm";
import { resolvePortfolioIcon } from "@/lib/iconRegistry";

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

export function Contact() {
  const { values, errors, status, isLoading, setField, submit } = useContactForm();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submit();
  };

  return (
    <SectionShell
      id="contact"
      title={portfolioConfig.sections.contact.title}
      sectionClassName="relative w-full"
      headingClassName="flex flex-col items-center mb-12"
      contentClassName=""
      titleClassName="text-3xl md:text-4xl font-light tracking-[0.25em] text-white uppercase mb-3"
      titleUnderlineClassName="w-12 h-px bg-cyan-400/60"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div
            className="text-[96px] text-white/15 select-none leading-none"
            initial="initial"
            whileHover="hover"
            animate="animate"
            variants={envelopeVariants}
          >
            ✉
          </motion.div>

          <div className="flex flex-col gap-4">
            {portfolioConfig.contactLinks.map((link) => {
              const IconComponent = resolvePortfolioIcon(link.icon);
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

        <motion.form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <FormField
            label="Name"
            placeholder="Your name"
            value={values.name}
            error={errors.name}
            onChange={(value) => setField("name", value)}
          />

          <FormField
            label="Email"
            type="email"
            placeholder="your@email.com"
            value={values.email}
            error={errors.email}
            onChange={(value) => setField("email", value)}
          />

          <FormField
            label="Message"
            placeholder="Tell me about your project..."
            value={values.message}
            error={errors.message}
            onChange={(value) => setField("message", value)}
            multiline
          />

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
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
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
    </SectionShell>
  );
}

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
  type?: string;
  multiline?: boolean;
}

function FormField({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  multiline = false,
}: FormFieldProps) {
  const fieldClassName = `w-full bg-white/3 backdrop-blur-md border rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 transition-all duration-200 focus:outline-none ${
    error
      ? "border-red-400/50 focus:border-red-400 focus:bg-red-500/5 focus:ring-1 focus:ring-red-400/30"
      : "border-white/10 focus:border-cyan-400/50 focus:bg-white/5 focus:ring-1 focus:ring-cyan-400/20"
  }`;

  return (
    <motion.div
      className="relative"
      animate={error ? { x: [-4, 4, -4, 4, 0] } : {}}
      transition={{ duration: 0.4 }}
    >
      <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
        {label}
      </label>

      {multiline ? (
        <textarea
          placeholder={placeholder}
          rows={3}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${fieldClassName} resize-none`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={fieldClassName}
        />
      )}

      {error ? (
        <motion.span
          className="text-xs text-red-400/80 mt-1 block"
          initial={{ opacity: 0, y: -2 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.span>
      ) : null}
    </motion.div>
  );
}
