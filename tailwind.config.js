const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'gray-primary': '#262626',
        'neon-green': '#39ff14',
        'gray-bg': '#5B5B5B',
        'text-color': '#A5A5A5'
      }
    },
  },
  plugins: [
    require('tailwindcss-font-inter'),
    require('@tailwindcss/forms')]
}