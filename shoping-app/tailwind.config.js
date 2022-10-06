/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      graphikMedium: ["Graphik Medium", "sans-serif"],
      graphikLight: ["Graphik Light", "sans-serif"],
      graphikBold: ["Graphik Bold", "sans-serif"],
    },
  },
  plugins: [],
};
