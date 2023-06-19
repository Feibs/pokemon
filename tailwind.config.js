/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "#D40000",
        "primary-yellow": "#FFCB05", 
        "primary-blue": "#3760AB",
        "secondary-blue": "#E3EBF9",
      },
    },
  },
  plugins: [],
}

