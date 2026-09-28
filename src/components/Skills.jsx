import React from "react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const Skills = () => (
  <section id="skills" className="py-24 px-5 sm:px-8 bg-surface/40">
    <div className="max-w-6xl mx-auto">
      <SectionHeading command="cat skills.json" title="Skills & Technologies" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: ci * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass glow-border rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-signal-violet">{cat.eyebrow}</span>
              <h3 className="font-display font-semibold text-text-primary">{cat.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="font-mono text-xs px-2.5 py-1.5 rounded-md bg-surface-raised text-text-secondary border border-border-soft">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
