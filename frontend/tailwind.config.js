/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  daisyui: {
    themes: false,
  },
  theme: {

    // extend: {},
    fontFamily: {
      "epilogue-regular": ["Epilogue Regular"],
      "dm-sans-regular": ["DM Sans Regular"],
      "dm-sans-bold": ["DM Sans Bold"],
      "poppins-bold": ["Poppins Bold"],
      "poppins-regular": ["Poppins Regular"],
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
      lorange: "#ff895d",
      grey: "#797E87",
      aqua: "#00CCFF"
    }
  },
 
  plugins: [require("daisyui", "flowbite/plugin")],
});

