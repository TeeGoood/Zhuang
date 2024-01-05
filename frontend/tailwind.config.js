/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          normal: "#3559E0",
          dark: "#081132",
          light: "#E7EBFB",
          notThatLight: "#a7b6f0",
          soLight: "#F4F6FD"
        },
        danger: {
          normal: "#ED4012",
          light: "#F9BCAC"
        },
        approval: {
          normal: "#5CE01F",
          light: "#D1F6C0",
          checkbox: "#76e542"
        }
      },
      fontFamily:{
        primary: "Kanit, Arial, sans-serif"
      }
    },
  },
  plugins: [],
}

