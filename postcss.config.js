const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

// postcss.config.js
// module.exports = {
//     plugins: {
//         tailwindcss: {},
//         autoprefixer: {},
//     }
// }
// postcss.config.js
// module.exports = {
//     plugins: [
//         require('autoprefixer'),
//         require('tailwindcss'),
//     ]
// }

module.exports = {
    plugins: [
        tailwindcss,
        autoprefixer,
    ],
};