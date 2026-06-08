/** @type {import('tailwindcss').Config} */
// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

    },
    fontFamily: {
      nav: ['"Edu AU VIC WA NT Hand"']
      
    }
  },
  plugins: [
      // require('tailwindcss-filters'),
  ],
}