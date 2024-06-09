/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 0 .7rem rgba(0, 0, 0, .3)'
      },
    },
  },
  plugins: [],
}