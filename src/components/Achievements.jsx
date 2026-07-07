import React from "react";
import { motion } from "motion/react";
import { ACHIEVEMENTS } from "../data/portfolio";
import { useCountUp } from "../hooks/useCountUp";
import SectionHeading from "./SectionHeading";

const StatCard = ({ stat, delay }) => {
  const { ref, value } = useCountUp(stat.value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay }}
      className="glass glow-border rounded-2xl p-8 text-center"
    >
      <p className="font-display text-4xl sm:text-5xl font-bold text-gradient">
        {value}{stat.suffix}
      </p>
      <p className="text-sm text-text-secondary mt-2">{stat.label}</p>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section className="py-24 px-5 sm:px-8 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading command="stats --summary" title="Achievements" align="center" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {ACHIEVEMENTS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
