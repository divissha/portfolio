/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#fffdfb",
        pink: { DEFAULT: "#ffd6e8", deep: "#f5a8c9" },
        lavender: { DEFAULT: "#e3d6fd", deep: "#b8a0ef" },
        skyblue: { DEFAULT: "#d3ecff", deep: "#9bcdf5" },
        buttery: { DEFAULT: "#fff3c4", deep: "#f3d873" },
        ink: "#4a3f55",
        muted: "#8b7d99",
      },
      borderRadius: {
        xl2: "20px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(190, 160, 220, 0.15)",
      },
    },
  },
  plugins: [],
};
