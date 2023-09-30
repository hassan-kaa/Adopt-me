/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx }"],
  theme: {
    fontFamily: {
      'main': ['Montserrat', 'sans-serif'],},
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      aspectRatio: {
        '3/2': '3/2',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}