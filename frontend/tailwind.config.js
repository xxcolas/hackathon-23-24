const colors = [
  "purple",
  "red",
  "green",
  "yellow",
  "blue",
  "gray",
]

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    ...colors.map((color) => `bg-${color}-100`),
    ...colors.map((color) => `text-${color}-400`),
    ...colors.map((color) => `border-${color}-300`),
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slideUp: "slideUp 0.3s ease-out forwards",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themeRoot: ".chat",
  },
};
