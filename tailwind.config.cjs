/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skyBlue: {
          50: "#f2f7f9",
          100: "#e6eff3",
          200: "#bfd6e0",
          300: "#99bdcd",
          400: "#4d8ca8",
          500: "#005A82",
          600: "#005175",
          700: "#004462",
          800: "#00364e",
          900: "#002c40"
        }
      }
    }
  },
  plugins: []
};
