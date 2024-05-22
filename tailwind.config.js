import { height, width } from '@mui/system'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        mainMenuTansSmIn : "mainMenuTansSmIn 0.4s ease-in-out",
        mainMenuTansSmOut : "mainMenuTansSmOut 0.4s ease-in-out",
        // appear : "appear 0.3s ease-in-out",
        // disappear : "disappear 0.3s ease-in-out",
      },
      keyframes: {
        mainMenuTansSmIn:{
          from : {height : '6.5rem' ,width : '95%'},
          to : {height : '11.2rem' ,width : '85%'},
        },
        mainMenuTansSmOut:{
          from : {height : '11.2rem' ,width : '85%'},
          to : {height : '6.5rem' ,width : '95%'}
        },
        // closeMenu:{
        //   from : {height : '59vh'},
        //   to : {height : "16vh"},
        // },
        // appear:{
        //   from : {opacity : 0},
        //   to : {opacity : 1},
        // },
        // disappear:{
        //   from : {opacity : 1},
        //   to : {opacity : 0},
        // }
      }
    },
  },
  plugins: [],
}

