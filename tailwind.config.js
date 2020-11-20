// module.exports = {
//   purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }
let colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './public/**/*.html',
        './src/**/*.html',
        './src/**/*.vue',
    ],
    theme: {
        inset: {
            '1/2': '50%',
            '-5': '-5px',
            '-10': '-10px',
            '-15': '-15px',
            '-55': '-55%;',
            '-8': '-32px',
            114: '114px',
            96: '96px',
            0: 0,
            90: '90px',
            80: '80px',
        },
        extend: {
            margin: {
                none: 'initial',
                26: '7rem',
            },
            maxWidth: {
                card: '410px',
            },
            minWidth: {
                card: '344px',
            },
            height: {
                card: '200px',
                priceContent: '234px',
            },
            width: {
                pricing: '335px',
                245: '245px',
                280: '280px',
                345: '345px',
                hr: '200px',
            },
            colors,
            fontFamily: {
                sans: ['proxima-soft', 'sans-serif'],
            },
        },
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        textDecoration: ['group-hover'],
        minWidth: ['responsive'],
        opacity: ['group-hover'],
        backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
        backgroundOpacity: ['responsive', 'hover', 'focus'],
    },
    plugins: [
        // ...
    ],
};