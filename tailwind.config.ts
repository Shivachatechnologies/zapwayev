import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#22c55e",
          50: "#f0fdf4",
          100: "#dcfce7",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
        },
        accent: {
          DEFAULT: "#3b82f6",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #22c55e, #3b82f6)",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, hsla(145,60%,40%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(212,60%,50%,0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(145,60%,40%,0.1) 0px, transparent 50%)",
      },
      animation: {
        "counter-up": "counterUp 1.5s ease-out forwards",
      },
      keyframes: {
        counterUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
