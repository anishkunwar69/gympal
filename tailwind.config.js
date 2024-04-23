/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        darkMode:"rgb(17,17,17)",
        brand:"rgb(11, 184, 129)",
        footer:"rgb(6, 138, 95)",
        button:"rgb(5, 110, 77)",
        secondButton:"rgb(17,17,17)",
        cardColor:"rgb(200, 200, 200)"
      },
      fontFamily:{
        montserrat:`"Montserrat", sans-serif`,
        poppins:`"Roboto", sans-serif`,
      },
      boxShadow:{
        glow:'0px 0px 25px 0px rgb(11, 184, 129)'
      },
      screens:{
        tab:'992px',
        low:"346px"
      }
    },
  },
  plugins: [],
}