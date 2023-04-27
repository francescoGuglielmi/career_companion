/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    // extend: {},
    fontFamily: {
      "epilogue-regular": ["Epilogue Regular"],
      "dm-sans-regular": ["DM Sans Regular"],
    },
    colors: {
      navy: "#003060",
      purple: "#6B66DA",
      orange: "#F74F39",
      white: "#ffffff",
      black: "#31302F",
      cream: "#F4F3EF",
      blue: "#005689",
      lblue: "#007cb9",
      lorange: "#ff895d"
    }
  },
 
  plugins: [],
}

