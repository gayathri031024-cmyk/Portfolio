import React from "react";
import { motion } from "motion/react";
import { FiBookOpen, FiTarget, FiMapPin } from "react-icons/fi";
import { PERSONAL_INFO } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const About = () => (
  <section id="about" className="py-24 px-5 sm:px-8">
    <div className="max-w-4xl mx-auto">
      <SectionHeading command="whoami --verbose" title="About Me" />

      {PERSONAL_INFO.bio.map((para, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-text-secondary text-base sm:text-lg leading-relaxed mb-5"
        >
          {para}
        </motion.p>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 glass rounded-2xl p-6 space-y-4"
      >
        <div className="flex items-start gap-3">
          <FiBookOpen className="text-signal-violet mt-1 shrink-0" />
          <div>
            <p className="font-display font-semibold text-text-primary">{PERSONAL_INFO.education.degree}</p>
            <p className="text-sm text-text-secondary">{PERSONAL_INFO.education.institution} · {PERSONAL_INFO.education.duration}</p>
          </div>
        </div>
        <div className="flex items-start gap-3 pt-4 border-t border-border-soft">
          <FiTarget className="text-signal-cyan mt-1 shrink-0" />
          <p className="text-sm text-text-secondary">Seeking entry-level Full Stack, Backend, MERN or AI/GenAI roles.</p>
        </div>
        <div className="flex items-start gap-3 pt-4 border-t border-border-soft">
          <FiMapPin className="text-signal-violet mt-1 shrink-0" />
          <p className="text-sm text-text-secondary">{PERSONAL_INFO.location}</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
