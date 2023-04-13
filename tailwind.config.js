/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.jsx',
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      '2xl': { max: '1536px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '567px' },
      xs: { max: '420px' },
    },
    extend: {
      colors: {
        'app_bg-light': '#F4F4F4',
        'app_bg-dark': '#1A1D1F',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
};
