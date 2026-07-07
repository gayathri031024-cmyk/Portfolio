import React from "react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const SkillBar = ({ name, level, delay }) => (
  <div>
    <div className="flex justify-between items-baseline mb-1.5">
      <span className="text-sm font-medium text-text-primary">{name}</span>
      <span className="font-mono text-xs text-signal-cyan">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-surface-raised overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="h-full rounded-full bg-signal"
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-5 sm:px-8 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading command="cat skills.json" title="Skills & Technologies" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass glow-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-xs text-signal-violet">{cat.eyebrow}</span>
                <h3 className="font-display font-semibold text-text-primary">{cat.name}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
