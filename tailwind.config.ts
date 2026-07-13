import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark charcoal palette (not pure black) + one accent color
        charcoal: {
          DEFAULT: "#111214",
          light: "#17181b",
          lighter: "#1e2023",
          border: "#2a2c30",
        },
        accent: {
          DEFAULT: "#8b5cf6", // violet-500
          light: "#a78bfa",
          dark: "#7c3aed",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
