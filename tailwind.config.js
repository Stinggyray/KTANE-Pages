const colors = require('tailwindcss/colors')

let grayColors = colors.gray;

//grayColors[700] = "#2c2f33"

// Reject modernity, return to AMOLED
//grayColors[700] = "#111111"
//grayColors[800] = "#000000"

module.exports = {
    mode: 'jit',
    content: [
        './views/**/*.hbs',
        './routes/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                gray: colors.neutral, //colors.gray //colors.trueGray
                yellow: colors.amber,

            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
