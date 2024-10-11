/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Arial", "sans-serif"],
    },
    extend: {
      // fontFamily: {
      //   poppins: ["Poppins", "sans-serif"],
      //   inter: ["Inter", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
