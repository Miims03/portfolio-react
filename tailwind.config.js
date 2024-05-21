/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        openMenu : "openMenu 0.3s ease-in-out",
        closeMenu : "closeMenu 0.3s ease-in-out",
        appear : "appear 0.3s ease-in-out",
        disappear : "disappear 0.3s ease-in-out",
      },
      keyframes: {
        openMenu:{
          from : {height : '16vh'},
          to : {height : "59vh"},
        },
        closeMenu:{
          from : {height : '59vh'},
          to : {height : "16vh"},
        },
        appear:{
          from : {opacity : 0},
          to : {opacity : 1},
        },
        disappear:{
          from : {opacity : 1},
          to : {opacity : 0},
        }
      }
    },
  },
  plugins: [],
}

