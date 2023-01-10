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
      colors: {
        location1: "#7EFFC1",
        location2: "#FFAA5B",
        location3: "#A689FB",
        location4: "#FDEC59",
        location5: "#638FFF",
      },
      spacing: {
        18: "4.625rem",
        19: "4.875rem",
        21: "5.125rem",
        "submit-btn-mob": "0.625rem",
        drop: "32rem",
        "tablet-language": "19.875rem",
        "desktop-language": "49.625rem",
        "road-mobile": "674px",
        "road-picture-mobile": "594px",
        label: "2.625rem",
        22: "5.5rem",
        23: "5.825rem",
        35: "8.625rem",
        38: "9.5rem",
        57: "14.125rem",
        62: "15.625rem",
        97: "26.1rem",
        99: "33.1rem",
      },
      rotate: {
        18: "18deg",
      },
    },
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
