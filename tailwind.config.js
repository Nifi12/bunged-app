/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgGreyCard: {
          100: '#37474F',
        },
        bgBlueCard: {
          100: '#81B2CA',
        },
      },
    },
  },
  plugins: [],
}
