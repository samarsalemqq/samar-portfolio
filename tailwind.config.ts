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
        // Desert night: deep navy (not black) + one sand-gold accent
        charcoal: {
          DEFAULT: "#0d1320",
          light: "#131a2a",
          lighter: "#1a2336",
          border: "#27324a",
        },
        accent: {
          DEFAULT: "#d9a441", // sand gold
          light: "#e8c27a",
          dark: "#b9862c",
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
