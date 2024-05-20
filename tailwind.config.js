/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        nuvinto: ['Nuvinto'],
        montserrat: ['Montserrat'],
        figtree: ['Figtree']
      },
    },
  },
  plugins: [],
}

