/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    // extend: {},
    fontFamily: {
      "epilogue-regular": ["Epilogue Regular"],
      "dm-sans-regular": ["DM Sans Regular"],
      "dm-sans-bold": ["DM Sans Bold"],
    },
    colors: {
      navy: "#003060",
      purple: "#6B66DA",
      orange: "#F74F39",
      white: "#ffffff",
      black: "#31302F",
      cream: "#F4F3EF",
      lilac: "#D2BAF4",
      blue: "#005689",
      lblue: "#007cb9",
      lorange: "#ff895d"
    }
  },
 
  plugins: [require("daisyui")],
});

