import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { NAV_ITEMS, PERSONAL_INFO } from "../data/portfolio";

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { icon: FiGithub, href: PERSONAL_INFO.social.github, label: "GitHub" },
    { icon: FiLinkedin, href: PERSONAL_INFO.social.linkedin, label: "LinkedIn" },
    { icon: FiMail, href: PERSONAL_INFO.social.email, label: "Email" },
  ];

  return (
    <footer className="border-t border-border-soft px-5 sm:px-8 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-text-primary">
            {PERSONAL_INFO.name}
            <span className="text-gradient">.</span>
          </p>
          <p className="text-sm text-text-muted mt-1">© {year} All rights reserved.</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-secondary">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-signal-violet dark:hover:text-signal-cyan transition-colors"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              data-cursor-hover
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-text-secondary hover:text-signal-violet dark:hover:text-signal-cyan transition-colors"
            >
              <s.icon size={15} />
            </a>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            data-cursor-hover
            className="w-9 h-9 rounded-full bg-signal flex items-center justify-center text-white"
          >
            <FiArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
