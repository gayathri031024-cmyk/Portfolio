import React from "react";
import { motion } from "motion/react";
import { DEV_EXPERIENCE } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const Experience = () => (
  <section id="experience" className="py-24 px-5 sm:px-8 bg-surface/40">
    <div className="max-w-6xl mx-auto">
      <SectionHeading command="git log --oneline" title="Projects & Development Experience" />
      <div className="grid sm:grid-cols-2 gap-6">
        {DEV_EXPERIENCE.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glow-border rounded-2xl p-6"
          >
            <h3 className="font-display font-semibold text-text-primary mb-2">{item.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
