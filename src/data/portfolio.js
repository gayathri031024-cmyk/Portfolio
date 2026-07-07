// ============================================
// PORTFOLIO DATA
// Edit this file to update all site content.
// ============================================

export const PERSONAL_INFO = {
  name: "Gayathri Virabhathini",
  title: "AI & Data Science | Full Stack Developer",
  tagline:
    "I build intelligent systems and full-stack products — from neural networks that classify and predict, to MERN applications that ship.",
  bio: [
    "I'm a final-year AI & Data Science undergraduate who spends equal time training models and shipping web apps. I like problems that sit at the intersection of the two — a chatbot that needs both a good LLM pipeline and a clean UI, a classifier that needs both solid preprocessing and a dashboard someone can actually use.",
    "My toolkit spans Python and the ML/DS stack (TensorFlow, OpenCV, NLP) on one side, and the MERN stack (MongoDB, Express, React, Node.js) on the other. I care about writing code that's readable six months later, not just code that runs today.",
  ],
  education: {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Megha Institute of Engineering and Technology for Women",
    duration: "2022 — 2026",
    detail: "Coursework in Machine Learning, Deep Learning, NLP, Computer Vision, Database Systems, and Full Stack Developer.",
  },
  objective:
    "Seeking an opportunity as an AI/ML Engineer or Full Stack Developer where I can apply data-driven thinking to build products that are technically sound and genuinely useful.",
  highlights: [
    { label: "AI/ML Projects", value: "5+", icon: "brain" },
    { label: "Full Stack Apps", value: "2+", icon: "layers" },
    { label: "Workshops Attended", value: "6+", icon: "users" },
    { label: "Lines Committed", value: "10k+", icon: "git" },
  ],
  resumeUrl: "https://drive.google.com/file/d/1bdOvgqd-6Egwf1zYcOhSGeHkyBstilXi/view?usp=drive_link",
  email: "gayathri031024@gmail.com",
  phone: "+91 84639 71239",
  location: "Hyderabad, Telangana, India",
  social: {
    github: "https://github.com/gayathri031024-cmyk",
    linkedin: "https://linkedin.com/in/gayathri-virabhathini-959463286 ",
    email: "mailto:gayathri031024@gmail.com",
  },
};

export const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const SKILL_CATEGORIES = [
  {
    key: "programming",
    name: "Programming",
    eyebrow: "01",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    key: "frontend",
    name: "Frontend",
    eyebrow: "02",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "React.js", level: 88 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    key: "backend",
    name: "Backend",
    eyebrow: "03",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
    ],
  },
  {
    key: "database",
    name: "Database",
    eyebrow: "04",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 78 },
    ],
  },
  {
    key: "ai-ml",
    name: "AI & ML",
    eyebrow: "05",
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "OpenCV", level: 78 },
      { name: "NLP", level: 75 },
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 78 },
    ],
  },
  {
    key: "tools",
    name: "Tools",
    eyebrow: "06",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "Postman", level: 75 },
    ],
  },
];

export const PROJECT_CATEGORIES = ["All", "AI/ML", "Full Stack"];

export const PROJECTS = [
  {
    id: 1,
    title: "GenAI Conversational Chatbot",
    category: "AI/ML",
    description:
      "A context-aware conversational assistant built on a generative language model, with prompt engineering and memory handling for multi-turn dialogue.",
    tech: ["Python", "LLM APIs", "NLP", "Flask"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    github: "https://github.com/gayathri-virabhathini/genai-chatbot",
    live: "#",
  },
  {
    id: 2,
    title: "Rice Grain Classification",
    category: "AI/ML",
    description:
      "A computer vision pipeline that classifies rice grain varieties from images using CNNs, with OpenCV-based preprocessing and augmentation.",
    tech: ["Python", "TensorFlow", "OpenCV", "CNN"],
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80",
    github: "https://github.com/gayathri-virabhathini/rice-grain-classification",
    live: "#",
  },
  {
    id: 3,
    title: "Bitcoin Sentiment Analysis",
    category: "AI/ML",
    description:
      "An NLP model that scores social-media sentiment around Bitcoin and correlates it against historical price movement to surface market signals.",
    tech: ["Python", "NLP", "Pandas", "Scikit-learn"],
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80",
    github: "https://github.com/gayathri-virabhathini/bitcoin-sentiment-analysis",
    live: "#",
  },
  {
    id: 4,
    title: "MERN Portfolio Website",
    category: "Full Stack",
    description:
      "A full-stack personal portfolio with an admin dashboard for managing projects and messages, backed by a MongoDB + Express API.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    github: "https://github.com/gayathri-virabhathini/mern-portfolio",
    live: "#",
  },
  {
    id: 5,
    title: "MERN Blogging Platform",
    category: "Full Stack",
    description:
      "A full-featured blogging application with authentication, rich-text editing, comments, and a REST API for posts and users.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    github: "https://github.com/gayathri-virabhathini/mern-blog",
    live: "#",
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    type: "internship",
    role: "AI/ML Intern",
    org: "TechNest Solutions",
    duration: "May 2025 — Jul 2025",
    description:
      "Built and evaluated classification models for an internal computer-vision tool; worked on data preprocessing pipelines and model performance reporting.",
  },
  {
    id: 2,
    type: "workshop",
    role: "MERN Stack Development Workshop",
    org: "Workshop Series",
    duration: "Dec 2025",
    description:
      "Hands-on workshop covering MongoDB, Express.js, React, and Node.js — culminating in a deployed full-stack portfolio project.",
  },
  {
    id: 3,
    type: "internship",
    role: "Web Development Intern",
    org: "CodeBridge Labs",
    duration: "Dec 2024 — Feb 2025",
    description:
      "Developed and maintained React components for client-facing dashboards; collaborated with backend team on REST API integration.",
  },
  {
    id: 4,
    type: "workshop",
    role: "Deep Learning & Computer Vision Bootcamp",
    org: "Bootcamp Series",
    duration: "Sep 2024",
    description:
      "Intensive bootcamp on CNN architectures, transfer learning, and OpenCV-based image processing pipelines.",
  },
  {
    id: 5,
    type: "certification",
    role: "NLP & Generative AI Certification",
    org: "Online Certification",
    duration: "Jul 2024",
    description:
      "Certification covering transformer architectures, prompt engineering, and applied NLP techniques.",
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "2025",
    icon: "brain",
  },
  {
    id: 2,
    title: "Deep Learning with TensorFlow",
    issuer: "Coursera",
    date: "2025",
    icon: "cpu",
  },
  {
    id: 3,
    title: "MERN Stack Development",
    issuer: "Workshop Certification",
    date: "2025",
    icon: "code",
  },
  {
    id: 4,
    title: "Python for Data Science",
    issuer: "Online Certification",
    date: "2024",
    icon: "database",
  },
  {
    id: 5,
    title: "NLP & Generative AI",
    issuer: "Online Certification",
    date: "2024",
    icon: "message",
  },
  {
    id: 6,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training",
    date: "2024",
    icon: "cloud",
  },
];

export const ACHIEVEMENTS = [
  { label: "Projects Completed", value: 12, suffix: "+" },
  { label: "Certifications", value: 6, suffix: "+" },
  { label: "Technologies Learned", value: 20, suffix: "+" },
  { label: "GitHub Repositories", value: 15, suffix: "+" },
];
