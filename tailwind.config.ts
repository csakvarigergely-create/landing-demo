import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111820",
        muted: "#66717d",
        line: "#dbe6e9",
        soft: "#f5f8f9",
        navy: "#102333",
        blue: "#245e9f",
        aqua: "#0ba7a5"
      },
      boxShadow: {
        soft: "0 12px 32px rgba(17, 24, 32, 0.08)",
        lift: "0 28px 90px rgba(17, 24, 32, 0.18)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
