/** @type {import('tailwindcss').Config} */
const extension = {
  "colors": {
    "sqyid-bg": "#f8f9fa",
    "sqyid-cta": "#2563eb",
    "sqyid-accent": "#2563eb",
    "sqyid-border": "#e2e6ea",
    "sqyid-primary": "#1a1f2e",
    "sqyid-surface": "#ffffff",
    "sqyid-cta-text": "#ffffff",
    "sqyid-secondary": "#5a6070",
    "sqyid-surface-alt": "#f4f6f8",
    "sqyid-accent-light": "#2563eb1f"
  },
  "fontFamily": {
    "body": "var(--font-body)",
    "display": "var(--font-display)"
  }
};

module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      ...extension,
      backgroundImage: {
        "gradient-mesh": "var(--gradient-mesh)"
      }
    }
  },
  plugins: []
};
