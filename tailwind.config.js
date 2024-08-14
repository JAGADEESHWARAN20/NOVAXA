/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'small-devices': '340px',
      'smallabove':'400px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1397px',
      // => @media (min-width: 1024px) { ... }

      'xl': '3280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '4536px',
      // => @media (min-width: 1536px) { ... }
      'mobile2' : '400px',
    },
    extend: {
      dropShadow:{
        'yellow-dark': '1px 27px 34px 5px rgba(211, 152, 0, 1)',
        'yellow-light': '1px 27px 34px 5px rgba(211, 152, 0, 1)',
        'orange-dark': '1px 27px 34px 5px rgba(255, 165, 0, 1)',
        'orange-light': '1px 27px 34px 5px rgba(255, 165, 0, 1)',
      },
      colors: {
        primaryColor: {
          light: "#8873ef",
          dark: "#463b7e",
        },
        headingColor: {
          light: "#081e21",
          dark: "#04060a",
        },
        smallTextColor: {
          light: "#193256",
          dark: "#0c1a2c",
        },
      },
    }
    },
  plugins: [require("daisyui")],
}