/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {

        fade: {
          '0%' : { opacity: 0, transform: 'translate(0, 10px)' },
          '100%' : { opacity: 1}
        }
      },

      animation : {
        'fade-in' : 'fade 0.5s ease-out'
      }
    },
  },
  plugins: [],
}
