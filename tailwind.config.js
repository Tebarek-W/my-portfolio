/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#0c1222",
          muted: "#4a5568",
          faint: "#718096",
        },
        surface: {
          DEFAULT: "#fafbfc",
          raised: "#ffffff",
          sunken: "#f1f4f8",
          border: "#e2e8f0",
        },
        primary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        dark: {
          DEFAULT: "#0a0e14",
          alt: "#111827",
          card: "#151b26",
          border: "rgba(255, 255, 255, 0.08)",
        },
      },
      maxWidth: {
        content: "96rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(12, 18, 34, 0.04), 0 4px 16px rgba(12, 18, 34, 0.04)",
        lift: "0 8px 30px rgba(12, 18, 34, 0.08)",
        focus: "0 0 0 3px rgba(13, 148, 136, 0.35)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};
