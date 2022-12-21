/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    fontFamily: {
      roboto: ["Roboto"],
    },

    extend: {
      colors: {
        primary: "#c44062",
        secondary: "#ea6a6f",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
