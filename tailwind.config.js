/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,
      // or have default horizontal padding
      padding: '1rem',
      // default breakpoints but with 40px removed
      //
      // notice how the color changes at 768px but
      // the container size changes at 728px
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        'fg-black': '#030303',
        'fg-medium-brown': '#7A746E',
        'fg-light-cream': '#FFF7F0',
        'fg-galactic-blue': '#755CDE',
        'fg-summer-yellow': '#F6A560',
        'fg-pink': '#F39E9E',
        'fg-light-red': '#EB7565',
        'fg-cyan': '#61C4B7',
        'fg-dark-purple': '#552049',
      },
      fontFamily: {
        'jakarta': 'Plus Jakarta Sans',
      },
      fontSize: {
        'fg-headL': '56px',
        'fg-headM': '40px',
        'fg-headS': '32px',
        'fg-body': '18px'
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}