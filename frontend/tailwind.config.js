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
      "dm-sans-bold": ["DM Sans Bold"],
    },
    colors: {
      purple: "#6B66DA",
      orange: "#F74F39",
      white: "#ffffff",
      black: "#31302F",
      cream: "#F4F3EF",
      lilac: "#D2BAF4"
    }
  },
 
  plugins: [],
}

