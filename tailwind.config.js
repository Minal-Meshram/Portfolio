/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // ✅ merged properly
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        foreground: "#E5E7EB",
        muted: "#111827",
        "muted-foreground": "#9CA3AF",
        primary: "#a855f7",
        "card-border": "#4B5563",
        "card-text": "#D1D5DB",
        "button-secondary": "#E5E7EB",
        "button-secondary-foreground": "#111827",
        heading: "#E5E7EB",
        "heading-strong": "#F9FAFB",
        body: "#9CA3AF",
        "body-strong": "#D1D5DB",
      },
    },
  },
  plugins: [],
};
