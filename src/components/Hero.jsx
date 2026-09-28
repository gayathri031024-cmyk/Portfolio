import React from "react";
import { motion } from "motion/react";
import { FiGithub, FiLinkedin, FiArrowDown, FiDownload, FiFolder } from "react-icons/fi";
import { PERSONAL_INFO } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";
import { useTheme } from "../context/ThemeContext";
import NeuralBackground from "./NeuralBackground";

const ROLES = ["Full Stack Developer", "MERN Stack", "Python & FastAPI", "GenAI · RAG · LangGraph"];

const SNAPSHOT = [
  ["role", "Full Stack Developer"],
  ["stack", "React · TypeScript · Node.js · FastAPI"],
  ["data", "PostgreSQL · pgvector · MongoDB · Neo4j"],
  ["ai", "RAG · LangGraph · Claude API · Groq"],
  ["degree", "B.Tech AI & Data Science, 2026"],
  ["status", "open to full-time roles"],
];

const fade = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const btnPrimary =
  "inline-flex items-center gap-2 px-5 py-3 rounded-full bg-signal text-white font-medium shadow-lg shadow-signal-violet/30 hover:shadow-signal-cyan/40 transition-shadow";
const btnGlass =
  "inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-text-primary font-medium hover:border-signal-violet/50 transition-colors";

const Hero = () => {
  const { darkMode } = useTheme();
  const typed = useTypewriter(ROLES);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-signal-radial opacity-30 dark:opacity-40" />
      <NeuralBackground darkMode={darkMode} />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-signal-cyan/20 blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 -left-16 w-64 h-64 rounded-full bg-signal-violet/20 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <motion.p {...fade(0)} className="section-eyebrow text-signal-cyan text-sm mb-4">
            <span className="text-signal-violet">$</span> {PERSONAL_INFO.status}
          </motion.p>

          <motion.h1 {...fade(0.1)} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-text-primary">
            <span className="text-gradient">{PERSONAL_INFO.name}</span>
          </motion.h1>

          <motion.h2 {...fade(0.2)} className="mt-4 font-display text-xl sm:text-2xl font-semibold text-text-primary">
            {PERSONAL_INFO.headline}
          </motion.h2>

          <motion.div {...fade(0.25)} className="mt-3 h-7 font-mono text-base sm:text-lg text-text-secondary">
            {typed}
            <span className="caret-blink text-signal-violet">|</span>
          </motion.div>

          <motion.p {...fade(0.3)} className="mt-5 max-w-xl text-text-secondary leading-relaxed">
            {PERSONAL_INFO.description}
          </motion.p>

          <motion.p {...fade(0.35)} className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm font-medium text-text-primary">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {PERSONAL_INFO.openTo}
          </motion.p>

          <motion.div {...fade(0.4)} className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }} data-cursor-hover className={btnPrimary}>
              <FiFolder /> View Projects
            </a>
            <a href={PERSONAL_INFO.resumeUrl} download="Gayathri_Virabhathini_Resume.pdf" data-cursor-hover className={btnGlass}>
              <FiDownload /> Download Resume
            </a>
            <a href={PERSONAL_INFO.social.github} target="_blank" rel="noopener noreferrer" data-cursor-hover className={btnGlass}>
              <FiGithub /> GitHub
            </a>
            <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" data-cursor-hover className={btnGlass}>
              <FiLinkedin /> LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="justify-self-center relative w-full max-w-md"
        >
          <div className="absolute -inset-3 rounded-3xl bg-signal opacity-25 blur-2xl animate-float-slow" />
          <div className="relative glass glow-border rounded-2xl overflow-hidden font-mono text-sm">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border-soft">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-2 text-xs text-text-muted">profile.json</span>
            </div>
            <div className="p-5 space-y-2 leading-relaxed">
              {SNAPSHOT.map(([k, v]) => (
                <p key={k} className="flex flex-col sm:flex-row sm:gap-3">
                  <span className="text-signal-violet shrink-0 sm:w-20">{k}</span>
                  <span className="text-text-secondary">{v}</span>
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-muted"
        data-cursor-hover
      >
        <FiArrowDown size={20} />
      </motion.button>
    </section>
  );
};

export default Hero;
