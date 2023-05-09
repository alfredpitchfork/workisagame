/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'goldman': ['Goldman', 'cursive',],
        'mynerve': ['MyNerve', 'cursive',],
        'nunito': ['"Nunito"', 'sans-serif',],
        'brunoace': ['"Bruno Ace"', 'cursive',],
      }
    },
  },
  plugins: [],
}
