/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#000000',
        secondary: {
          blue: '#377DFF',
          green: '#38CB89',
          orange: '#FFAB00',
          red: '#FF5630',
        },
        neutral: {
          100: '#FEFEFE',
          200: '#F3F5F7',
          300: '#E8ECEF',
          400: '#6C7275',
          500: '#343839',
          600: '#232627',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('preline/plugin')],
}
