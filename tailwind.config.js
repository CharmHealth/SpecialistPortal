/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        '46414E': '#46414E',
        'bright-purple': '#C05AE1',
        'dark-purple': '#df9eff',
        'domino-gray': '#333237', 
        'faded-gray': '#46414E',
        'grey': '#909090',
        'lavender': '#875F9A',
        'light-gray': '#525256',
        'pink': '#E5B1F5',
        'really-dark-purple': '#4A135B',
        'really-faded-gray': '#B9B8B8',
        'calendar-tabs': '#FFA400'
      },
      borderRadius: {
        'test': '4rem',
      },
      height: {
        '104': '26rem',
        '128': '32rem',
        '144': '36rem',
      },
      width: {
        '68': '17rem',
      },
      inset: {
        '120': '30rem',
      },
    },
  },
  plugins: [],
}