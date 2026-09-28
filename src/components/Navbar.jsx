import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { NAV_ITEMS, PERSONAL_INFO } from "../data/portfolio";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.filter((i) => !i.external).map((item) => document.querySelector(item.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href, external) => {
    setOpen(false);
    if (external) { window.open(href, "_blank", "noopener,noreferrer"); return; }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
          className="font-display font-bold text-lg text-text-primary"
          data-cursor-hover
        >
          GV<span className="text-gradient">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 font-medium text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNav(item.href, item.external)}
                data-cursor-hover
                className={`px-3 py-2 rounded-full transition-colors ${
                  active === item.href
                    ? "text-signal-violet dark:text-signal-cyan"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            data-cursor-hover
            className="w-9 h-9 rounded-full flex items-center justify-center glass text-text-primary"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={darkMode ? "moon" : "sun"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            data-cursor-hover
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center glass text-text-primary"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass overflow-hidden"
          >
            <ul className="flex flex-col px-5 pb-4 gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href, item.external)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                      active === item.href
                        ? "text-signal-violet dark:text-signal-cyan bg-surface-raised"
                        : "text-text-secondary"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
