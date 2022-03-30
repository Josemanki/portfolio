const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-teal': '#28AFB0',
      },
      fontFamily: {
        sans: ['Red Hat Display', ...defaultTheme.fontFamily.sans],
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
    },
    fontFamily: {
      'red-hat': ['Red Hat Display', 'ui-sans-serif'],
      poppins: ['Poppins', 'ui-sans-serif'],
    },
  },
  plugins: [],
};
