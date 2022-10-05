/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      graphikMedium : ["Graphik Medium" , "sans-serif"] ,
      graphikLight : ["Graphik Light" , "sans-serif"],
      graphikBold : ["Graphik Bold" , "sans-serif"],
    },
  },
  plugins: [],
}
