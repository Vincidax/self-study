const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        turquoise: "#40e0d0",
        gray: colors.amber,
        red: colors.rose,
      },
    },
  },
  plugins: [],
};
