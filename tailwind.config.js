module.exports = {
  mode: 'jit',

  content: [
    "./dist/**/*.{html,js}"
  ],

  darkMode: false, // or 'media' or 'class'

  theme: {
    fontFamily: {
      'roboto': ['Roboto'],
    },

    extend: {
      colors: {
        'primary': '#113060',
        'secondary': '#EE342B',
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
}
