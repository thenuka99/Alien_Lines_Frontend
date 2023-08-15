/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'primary': '#4C0259', //purple
        'secondary': '#CA4255', //orange
        'other-yellow': '#FEDF15', //yellow
        'other-pink': '#F7A9FF', // pink
        'other-greem': '#00C9BF', //green

        'state-info': '#93115C', //darker pink
        'state-success': '#32BA7C', //green
        'state-error': '#FF5A54', //darker orange
        'state-warning': '#EE7B4C', // orange

        'black-01': '#1D1D1D', //light black
        'black-02': '#282828', //lighter black

        'gray-01': '#333333', //darker gray
        'gray-02': '#4F4F4F', //dark gray
        'gray-03': '#828282', //gray
        'gray-04': '#BDBDBD', //light gray
        'gray-05': '#E0E0E0', //lighter gray

      },
    },
  },
  plugins: [],
}