/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Avenir", "Helvetica", "Arial", "sans-serif"],
        christmas: ["Christmas", "cursive"]
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        lg: "1.2rem",
        xl: "1.35rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem"
      },

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
