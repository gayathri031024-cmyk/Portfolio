# Gayathri Virabhathini — Portfolio

A modern, responsive personal portfolio built with React 19, Vite, Tailwind CSS 4, and Motion (Framer Motion).

## Design

"Synapse" theme — a dark-by-default UI with a signature violet → cyan gradient
and glassmorphism cards, tying the visual identity to the AI/Data-Science +
full-stack developer subject. Section eyebrows use terminal-style commands
(`$ whoami`, `$ cat skills.json`, `$ ls ~/projects` …) as a structural device
that speaks the audience's own vernacular. The hero features a live canvas
"neural network" of drifting, connecting nodes.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Customize your content

Everything you're likely to edit lives in one place:

- `src/data/portfolio.js` — name, bio, education, skills, projects,
  experience, certifications, achievements, contact info, nav links.
- `public/image.jpg` — replace with your own profile photo.
- `public/resume.pdf` — add your resume here (the "Download Resume" button
  links to `/resume.pdf`).

## Structure

```
src/
  components/   UI building blocks (Hero, About, Skills, Projects, ...)
  context/      ThemeContext (dark/light mode, persisted to localStorage)
  data/         portfolio.js — all site content
  hooks/        useTypewriter, useCountUp
  App.jsx       page composition
  index.css     design tokens (CSS variables) + global styles
```

## Features

- Dark mode by default with a light-mode toggle (persisted)
- Framer Motion fade/slide/hover animations throughout, typing effect in Hero
- Scroll progress bar, scroll-to-top button, animated background particles
- Custom cursor effect (desktop, pointer-fine only; respects reduced motion)
- Loading screen on first paint
- Project filtering by category (All / AI-ML / Full Stack)
- Animated skill progress bars and count-up achievement stats
- Fully responsive, mobile-first, accessible focus states
- SEO meta tags in `index.html`
