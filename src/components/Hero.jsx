import React from "react";
import { motion } from "motion/react";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from "react-icons/fi";
import { PERSONAL_INFO } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";
import { useTheme } from "../context/ThemeContext";
import NeuralBackground from "./NeuralBackground";

const ROLES = [
  "AI & Data Science Enthusiast",
  "Full Stack Developer",
  "Machine Learning Explorer",
  "MERN Stack Builder",
];

const Hero = () => {
  const { darkMode } = useTheme();
  const typed = useTypewriter(ROLES);

  const socials = [
    { icon: FiGithub, href: PERSONAL_INFO.social.github, label: "GitHub" },
    { icon: FiLinkedin, href: PERSONAL_INFO.social.linkedin, label: "LinkedIn" },
    { icon: FiMail, href: PERSONAL_INFO.social.email, label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-signal-radial opacity-30 dark:opacity-40" />
      <NeuralBackground darkMode={darkMode} />

      {/* floating accent blobs */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-signal-cyan/20 blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 -left-16 w-64 h-64 rounded-full bg-signal-violet/20 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow text-signal-cyan text-sm mb-4"
          >
            <span className="text-signal-violet">$</span> whoami
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-text-primary"
          >
            Hi, I'm{" "}
            <span className="text-gradient">{PERSONAL_INFO.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 h-8 font-mono text-lg sm:text-xl text-text-secondary"
          >
            {typed}
            <span className="caret-blink text-signal-violet">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-text-secondary leading-relaxed"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              data-cursor-hover
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-signal text-white font-medium shadow-lg shadow-signal-violet/30 hover:shadow-signal-cyan/40 transition-shadow"
            >
              <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              data-cursor-hover
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-text-primary font-medium hover:border-signal-violet/50 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 flex items-center gap-4"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                data-cursor-hover
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-signal-violet dark:hover:text-signal-cyan transition-colors"
              >
                <s.icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="justify-self-center relative"
        >
          <div className="absolute -inset-3 rounded-full bg-signal opacity-40 blur-2xl animate-float-slow" />
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full p-1.5 bg-signal">
            <img
              src="/image.jpg"
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover rounded-full border-4 border-void"
            />
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
