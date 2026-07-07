import React from "react";
import { motion } from "motion/react";
import { FiBriefcase, FiUsers, FiAward } from "react-icons/fi";
import { EXPERIENCE } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const TYPE_META = {
  internship: { icon: FiBriefcase, label: "Internship" },
  workshop: { icon: FiUsers, label: "Workshop" },
  certification: { icon: FiAward, label: "Certification" },
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-5 sm:px-8 bg-surface/40">
      <div className="max-w-4xl mx-auto">
        <SectionHeading command="git log --oneline" title="Experience Timeline" />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-2.5 sm:left-3.5 top-2 bottom-2 w-px bg-signal" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => {
              const meta = TYPE_META[exp.type];
              const Icon = meta.icon;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-8 sm:-left-10 top-0 w-6 h-6 rounded-full bg-signal flex items-center justify-center ring-4 ring-void">
                    <Icon size={12} className="text-white" />
                  </span>
                  <div className="glass rounded-2xl p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-display font-semibold text-text-primary">{exp.role}</h3>
                      <span className="font-mono text-xs text-signal-cyan">{exp.duration}</span>
                    </div>
                    <p className="text-sm text-signal-violet dark:text-signal-cyan font-medium mb-2">
                      {meta.label} · {exp.org}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
