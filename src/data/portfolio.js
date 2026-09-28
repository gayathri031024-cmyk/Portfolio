// ============================================
// PORTFOLIO DATA
// Edit this file to update all site content.
// ============================================

export const PERSONAL_INFO = {
  name: "Gayathri Virabhathini",
  status: "2026 B.Tech AI & Data Science Graduate",
  positioning: "Full Stack Developer | MERN | Python | FastAPI | GenAI | RAG | LangGraph",
  headline: "Full Stack Developer building AI-powered applications",
  description:
    "2026 B.Tech AI & Data Science graduate focused on Full Stack Development, Python/FastAPI, MERN, and practical GenAI applications using RAG and LangGraph.",
  openTo: "Open to Full-Time Software Opportunities",
  bio: [
    "I'm a 2026 B.Tech graduate in AI & Data Science with a strong focus on Full Stack Development and applied AI. I build web applications using React, Node.js, Python and FastAPI, and I work with GenAI technologies such as RAG, LangChain and LangGraph.",
    "My projects combine practical software engineering with AI capabilities, including authentication, APIs, databases, testing, deployment and AI-assisted workflows.",
    "I'm currently looking for an entry-level Full Stack, Backend, MERN or AI/GenAI opportunity where I can contribute, learn from experienced engineers and grow with the team.",
  ],
  education: {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Megha Institute of Engineering and Technology for Women",
    duration: "2022 — 2026",
  },
  resumeUrl: "/Gayathri_Virabhathini_Resume.pdf",
  email: "gayathri031024@gmail.com",
  location: "Hyderabad, Telangana, India",
  social: {
    github: "https://github.com/gayathri031024-cmyk",
    linkedin: "https://www.linkedin.com/in/gayathri-virabhathini/",
    email: "mailto:gayathri031024@gmail.com",
  },
};

export const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: PERSONAL_INFO.resumeUrl, external: true },
];

export const SKILL_CATEGORIES = [
  { key: "languages", name: "Languages", eyebrow: "01", skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"] },
  { key: "frontend", name: "Frontend", eyebrow: "02", skills: ["React", "Vite", "Redux", "Tailwind CSS", "Material UI"] },
  { key: "backend", name: "Backend", eyebrow: "03", skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT", "RBAC", "Pydantic"] },
  { key: "databases", name: "Databases", eyebrow: "04", skills: ["MongoDB", "PostgreSQL", "MySQL", "Neo4j", "pgvector"] },
  { key: "ai", name: "AI / GenAI", eyebrow: "05", skills: ["LangChain", "LangGraph", "RAG", "Claude API", "Groq", "Vector Search", "AI Agents"] },
  { key: "testing", name: "Testing", eyebrow: "06", skills: ["Jest", "Vitest", "Supertest", "Pytest"] },
  { key: "tools", name: "Tools / Deployment", eyebrow: "07", skills: ["Git", "GitHub Actions", "Vercel", "Render", "MongoDB Atlas"] },
];

// Only link a repo/demo when a real URL exists — never invent one.
export const PROJECTS = [
  {
    id: 1,
    title: "AI Sales Readiness Intelligence",
    status: "Live",
    description:
      "An AI-powered sales readiness platform that evaluates sales readiness using structured evidence, deterministic scoring and skill-gap analysis.",
    tech: ["FastAPI", "React", "TypeScript", "PostgreSQL", "LangGraph", "Claude", "RAG"],
    highlights: [
      "AI-assisted sales readiness evaluation",
      "Deterministic evaluation logic",
      "Skill-gap / root-cause analysis",
      "Structured AI workflow",
      "Full-stack architecture",
    ],
    github: "https://github.com/gayathri031024-cmyk/ai-sales-readiness-intelligence",
    live: "https://ai-sales-readiness-intelligence.vercel.app/",
  },
  {
    id: 2,
    title: "SentiNews – Finance RAG",
    status: "Live",
    description:
      "A finance-focused RAG application that retrieves relevant information and generates grounded responses from financial news and data.",
    tech: ["FastAPI", "React", "PostgreSQL / pgvector", "RAG", "Embeddings", "AI"],
    live: "https://senti-news-finance-rag-1.onrender.com/",
  },
  {
    id: 3,
    title: "CiteGraph",
    status: "Live",
    description:
      "An application focused on connecting information and citations through a graph-based structure.",
    tech: ["Graph-based", "Citations"],
    live: "https://citegraph-1.onrender.com/",
  },
  {
    id: 4,
    title: "AI Healthcare Operations Agent",
    status: "In Development",
    description:
      "An AI healthcare operations workflow designed for insurance verification, combining RAG, deterministic business rules, tool-based workflows and human approval. Uses fictional demo data only.",
    tech: ["React", "TypeScript", "FastAPI", "LangGraph", "PostgreSQL", "pgvector", "RAG"],
  },
];

export const DEV_EXPERIENCE = [
  { title: "Full-Stack Applications", text: "React / TypeScript front ends with FastAPI or Node/Express back ends, REST APIs and relational or document databases." },
  { title: "Auth & Access Control", text: "JWT authentication and role-based access control (RBAC) in the APIs I build." },
  { title: "Applied GenAI", text: "RAG pipelines with pgvector, and LangGraph workflows that combine LLMs with deterministic business rules." },
  { title: "Testing & Delivery", text: "Pytest, Vitest, Jest and Supertest for testing; GitHub Actions CI; deployments on Vercel and Render." },
];
