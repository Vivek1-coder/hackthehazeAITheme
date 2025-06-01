/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",  // important for toggling dark mode via a CSS class
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // for new app router
    "./pages/**/*.{js,ts,jsx,tsx}",     // for pages router if any
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
