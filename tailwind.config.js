/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        void: "var(--bg-void)",
        surface: "var(--bg-surface)",
        "surface-raised": "var(--bg-surface-raised)",
        "border-soft": "var(--border-soft)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        signal: {
          violet: "var(--signal-violet)",
          cyan: "var(--signal-cyan)",
          amber: "var(--signal-amber)",
        },
      },
      backgroundImage: {
        signal: "linear-gradient(100deg, var(--signal-violet), var(--signal-cyan))",
        "signal-radial": "radial-gradient(circle at 30% 20%, var(--signal-violet) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};
