/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    maxWidth: {
      '1/8': '20%',
    }
  },
  plugins: [require("daisyui")],
}