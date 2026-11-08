import type { Config } from "tailwindcss";

// Colors that change between dark and light mode read from the variables
// defined at the top of app/globals.css.
const themed = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

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
          DEFAULT: themed("night"),
          light: themed("surface"),
          lighter: themed("raised"),
          border: themed("line"),
        },
        ink: themed("ink"),
        soft: themed("soft"),
        muted: themed("muted"),
        accent: {
          DEFAULT: "#d9a441", // sand gold
          light: themed("sand-text"),
          dark: "#b9862c",
          ink: "#0d1320", // text sitting on the gold buttons, in both modes
        },
      },
      fontFamily: {
        sans: ["var(--font-readex, system-ui)", "system-ui", "sans-serif"],
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
