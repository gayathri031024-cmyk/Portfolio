import React from "react";
import { motion } from "motion/react";
import { FiCpu, FiLayers, FiUsers, FiGitCommit, FiBookOpen, FiTarget } from "react-icons/fi";
import { PERSONAL_INFO } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const ICONS = { brain: FiCpu, layers: FiLayers, users: FiUsers, git: FiGitCommit };

const About = () => {
  return (
    <section id="about" className="py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading command="whoami --verbose" title="About Me" />

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
          <div>
            {PERSONAL_INFO.bio.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-text-secondary leading-relaxed mb-4"
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 glass rounded-2xl p-6"
            >
              <div className="flex items-start gap-3 mb-4">
                <FiBookOpen className="text-signal-violet mt-1 shrink-0" />
                <div>
                  <p className="font-display font-semibold text-text-primary">{PERSONAL_INFO.education.degree}</p>
                  <p className="text-sm text-text-secondary">{PERSONAL_INFO.education.institution} · {PERSONAL_INFO.education.duration}</p>
                  <p className="text-sm text-text-muted mt-1">{PERSONAL_INFO.education.detail}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-4 border-t border-border-soft">
                <FiTarget className="text-signal-cyan mt-1 shrink-0" />
                <p className="text-sm text-text-secondary leading-relaxed">{PERSONAL_INFO.objective}</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4 content-start">
            {PERSONAL_INFO.highlights.map((h, i) => {
              const Icon = ICONS[h.icon];
              return (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass glow-border rounded-2xl p-5 text-center"
                >
                  <Icon className="mx-auto mb-3 text-signal-violet dark:text-signal-cyan" size={22} />
                  <p className="font-display text-2xl font-bold text-text-primary">{h.value}</p>
                  <p className="text-xs text-text-muted mt-1">{h.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
