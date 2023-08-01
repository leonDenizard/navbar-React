/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary-color': '#e9ecef',
        'background': '#f8f9fa'
      },
      fontFamily:{
        'Roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}