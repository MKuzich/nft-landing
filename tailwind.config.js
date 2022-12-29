/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins"],
        secondary: ["Montserrat"],
      },
    },
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
