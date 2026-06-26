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
        sans: ["var(--font-plus-jakarta)", "Inter", "sans-serif"],
        display: ["var(--font-outfit)", "Inter", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        accent: {
          indigo: "#6366f1",
          violet: "#8b5cf6",
          cyan: "#06b6d4",
          rose: "#f43f5e",
        },
        dark: {
          DEFAULT: "#0e1117",
          alt: "#13151a",
          card: "rgba(255, 255, 255, 0.06)",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 12s linear infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "bounce-in": "bounceIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px rgba(14, 165, 233, 0.2), 0 0 20px rgba(14, 165, 233, 0.1)" },
          "100%": { boxShadow: "0 0 20px rgba(14, 165, 233, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        }
      },
    },
  },
  plugins: [],
};
