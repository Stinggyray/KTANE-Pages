module.exports = {
  purge: {
    content: [
        './views/**/*.hbs',
        './routes/**/*.js'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
