/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B8860B", // Dark goldenrod
          dark: "#8B4513", // Saddle brown
          light: "#CD853F", // Peru
        },
        secondary: {
          DEFAULT: "#CD853F", // Peru
          dark: "#8B4513", // Saddle brown
          light: "#D4C4A8", // Tan
        },
        accent: {
          DEFAULT: "#8B4513", // Saddle brown
          dark: "#654321", // Dark brown
          light: "#B8860B", // Dark goldenrod
        },
        background: {
          DEFAULT: "#1A1A1A", // Dark grey
          light: "#2A2A2A", // Slightly lighter grey
          lighter: "#333333", // Medium grey
        },
        text: {
          DEFAULT: "#D4C4A8", // Tan
          muted: "#A9A9A9", // Grey
          dark: "#8B4513", // Saddle brown
        },
      },
      backgroundImage: {
        "gradient-text": "linear-gradient(to right, #B8860B, #8B4513)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
