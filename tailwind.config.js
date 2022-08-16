const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-navy': '#041C32',
        'custom-navy-light': '#062847',
        'custom-blue': '#2FA4FF',
      },
      fontFamily: {
        sans: ['Barlow', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        'about-grid': 'min-content auto',
      },
      gridTemplateRows: {
        'about-grid': 'min-content auto',
      },
    },
    container: {
      center: true,
      screens: {
        sm: '768px',
        md: '1024px',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'ui-sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
