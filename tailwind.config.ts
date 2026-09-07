import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0A1118",
        sapphire: {
          DEFAULT: "#0F2537",
          dark: "#123A5A",
        },
        gold: {
          DEFAULT: "#D4AF37",
          warm: "#E5C66B",
        },
        ivory: "#F4F1E8",
        steel: "#8C969F",
        nearblack: "#05090D",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #E5C66B 50%, #D4AF37 100%)",
        "sapphire-gradient": "linear-gradient(135deg, #0F2537 0%, #123A5A 100%)",
      },
      animation: {
        "radar-sweep": "radar-sweep 4s linear infinite",
        "pulse-gold": "pulse-gold 3s ease-in-out infinite",
        "grid-flow": "grid-flow 20s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        "radar-sweep": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-gold": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "grid-flow": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
