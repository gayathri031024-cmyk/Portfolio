import React from "react";
import { motion } from "motion/react";
import { FiGithub, FiExternalLink, FiCheck, FiTool } from "react-icons/fi";
import { PROJECTS } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const linkBtn =
  "flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium";

const ProjectCard = ({ project, index }) => {
  const inDev = project.status === "In Development";
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass glow-border rounded-2xl p-6 flex flex-col"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-display text-xl font-semibold text-text-primary">{project.title}</h3>
        <span
          className={`shrink-0 inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-1 rounded-full border ${
            inDev
              ? "border-signal-amber/50 text-signal-amber"
              : "border-emerald-400/50 text-emerald-500 dark:text-emerald-400"
          }`}
        >
          {inDev ? <FiTool size={11} /> : <FiCheck size={11} />} {project.status}
        </span>
      </div>

      <p className="text-sm text-text-secondary leading-relaxed mb-4">{project.description}</p>

      {project.highlights && (
        <ul className="mb-4 space-y-1.5 text-sm text-text-secondary">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="text-signal-cyan">▹</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mb-5 flex-1 content-start">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md bg-surface-raised text-text-secondary">
            {t}
          </span>
        ))}
      </div>

      {(project.github || project.live) ? (
        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" data-cursor-hover className={`${linkBtn} glass text-text-primary hover:border-signal-violet/50`}>
              <FiGithub size={15} /> GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" data-cursor-hover className={`${linkBtn} bg-signal text-white`}>
              <FiExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      ) : (
        <p className="text-xs text-text-muted font-mono">Work in progress — not yet deployed.</p>
      )}
    </motion.article>
  );
};

const Projects = () => (
  <section id="projects" className="py-24 px-5 sm:px-8">
    <div className="max-w-6xl mx-auto">
      <SectionHeading command="ls ~/projects" title="Featured Projects" />
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
