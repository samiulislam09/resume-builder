/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    maxWidth: {
      '1/8': '20%',
      '68':'11.66rem'
    },
    height: {
      '72':"18.56rem"
    }
  },
  plugins: [require("daisyui")],
}