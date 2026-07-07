import React from "react";
import { motion } from "motion/react";

/**
 * Every section opens with a terminal-command eyebrow (e.g. `$ cat skills.json`)
 * — a nod to the dev/AI audience and a consistent structural device across
 * the page, followed by a large display headline.
 */
const SectionHeading = ({ command, title, align = "left" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      <p className="section-eyebrow text-sm text-signal-cyan mb-3">
        <span className="text-signal-violet">$</span> {command}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary">
        {title}
      </h2>
      <div className={`h-1 w-16 rounded-full bg-signal mt-4 ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
};

export default SectionHeading;
