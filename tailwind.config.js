/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      

      animation:{
        'boucning-circle':'circle 1s linear reverse infinite'
      },
      keyframes:{
        circle:{
          "0%":{
              transform:'translateY(0%)'
          },
          "25%":{
            transform:'translateY(50%)'
          },
          "50%":{
            transform:'translateY(-50%)'
          },
          "100%":{
            transform:'translateY(0%)'
          }
        }
      },

    

      fontFamily:{
        'neucha':['Neucha','cursive']
      },
      boxShadow:{
        'header-shadow':"0px 1px 3px #2726269d"
      },
    },
  },
  plugins: [],
}
