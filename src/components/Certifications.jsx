import React from "react";
import { motion } from "motion/react";
import { FiCpu, FiCode, FiDatabase, FiMessageSquare, FiCloud, FiAward } from "react-icons/fi";
import { CERTIFICATIONS } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const ICONS = {
  brain: FiCpu,
  cpu: FiCpu,
  code: FiCode,
  database: FiDatabase,
  message: FiMessageSquare,
  cloud: FiCloud,
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading command="ls ~/certificates" title="Certifications" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = ICONS[cert.icon] || FiAward;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass glow-border rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-signal flex items-center justify-center shrink-0">
                  <Icon size={19} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-text-primary leading-snug">{cert.title}</h3>
                  <p className="text-sm text-text-secondary mt-1">{cert.issuer}</p>
                  <p className="font-mono text-xs text-signal-cyan mt-1">{cert.date}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
