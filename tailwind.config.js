const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-teal': '#28AFB0',
        'custom-navy': '#041C32',
      },
      fontFamily: {
        sans: [
          'Barlow',
          ...defaultTheme.fontFamily
            .sans,
        ],
      },
      gridTemplateColumns: {
        'about-grid':
          'min-content auto',
      },
      gridTemplateRows: {
        'about-grid':
          'min-content auto',
      },
      backgroundImage: {
        'radial-home':
          'radial-gradient(56.25% 56.25% at 50% 50%, #252525 0%, #181818 100%)',
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      'red-hat': [
        'Red Hat Display',
        'ui-sans-serif',
      ],
      poppins: [
        'Poppins',
        'ui-sans-serif',
      ],
    },
  },
  plugins: [],
};
