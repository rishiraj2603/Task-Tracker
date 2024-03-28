/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        pending: "#DF9B6D",
        mainScreen: "#353839",
      },
      fontFamily: {
        pt: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
