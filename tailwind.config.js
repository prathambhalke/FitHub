/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      themeRed: "#ff2625",
      white: "#FFFF",
    },
    fontFamily: {
      Navbar: ["Varela", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
