/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#334052',
          main: '#1B2430',
          dark: '#101A27',
        },
        secondary: {
          light: '#00F5F5',
          main: '#00C8C8',
          dark: '#00C3C3',
        },
        accent: {
          orange: '#FF7F11',
          pink: '#D11149',
          yellow: '#EFFF2C',
        },
      },
    },
  },
  plugins: [],
};
