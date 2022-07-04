/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'neucha':['Neucha','cursive']
      },
      boxShadow:{
        'header-shadow':"0px 1px 3px #2726269d"
      }
    },
  },
  plugins: [],
}
