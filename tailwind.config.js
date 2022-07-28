module.exports = {
  mode: "jit",

  content: ["./dist/**/*.{html,js}"],

  theme: {
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

  variants: {
    extend: {},
  },

  plugins: [require("@tailwindcss/forms")],
};
