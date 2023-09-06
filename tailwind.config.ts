import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-bg": "#f8f8f8",
        "secondary-bg": "#011627",
        "primary-fg": "#333333",
        "black-fg": "#000000",
        "secondary-fg": "#eceaea",
        "white-fg": "#ffffff",
        "dark-bg": "#051014",
        // 'color-1': '#015c73',
        "color-1": "#103c3f",
        "color-2": "#1f6b72",
        "color-3": "#134F53",
        "color-4": "#143642",
        "color-5": "#7e7e7e",
        "color-6": "#A4031F",
        "color-7": "#2DC7FF",
        "purple-bg": "#581058",
        "gold-fg": "#c0a71c",
        youtube: "#c4302b",
        telegram: "#0088cc",
        facebook: "#3b5998",
      },
      fontSize: {
        heading: ["54px", { lineHeight: "64px" }],
        // heading: '54px',
        "heading-md": ["38px", { lineHeight: "42px" }],
        footer: ["12px", { lineHeight: "24px" }],
      },
      boxShadow: {
        card: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },

      "min-2xl": { min: "1535px" },
      "min-xl": { min: "1279px" },
      "min-lg": { min: "1023px" },
      "min-md": { min: "767px" },
      "min-sm": { min: "639px" },
    },
  },
  plugins: [],
};
export default config;
