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
      fontSize: {
        titles: ["2.5rem", { lineHeight: "3.125rem" }],
        tagline: ["2.25rem", { lineHeight: "2.875rem" }],
      },
    },
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
