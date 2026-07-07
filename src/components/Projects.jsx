import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { PROJECTS, PROJECT_CATEGORIES } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const ProjectCard = ({ project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    whileHover={{ y: -8 }}
    className="glass glow-border rounded-2xl overflow-hidden flex flex-col"
  >
    <div className="relative h-44 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <span className="absolute top-3 left-3 font-mono text-[11px] px-2 py-1 rounded-full bg-void/70 text-signal-cyan backdrop-blur-sm">
        {project.category}
      </span>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="font-display font-semibold text-text-primary mb-2">{project.title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md bg-surface-raised text-text-secondary">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-text-primary hover:border-signal-violet/50"
        >
          <FiGithub size={15} /> GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-signal text-sm font-medium text-white"
        >
          <FiExternalLink size={15} /> Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading command="ls ~/projects" title="Featured Projects" />

        <div className="flex flex-wrap gap-2 mb-10">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              data-cursor-hover
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-signal text-white"
                  : "glass text-text-secondary hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
