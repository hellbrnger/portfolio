/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"], // Ensure Tailwind scans your files
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        customSlideRight: "slideRight 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
