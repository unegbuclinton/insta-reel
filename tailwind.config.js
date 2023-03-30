/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        'dark-pink': '#df35a5',
        grey: '#d3d5de',
        folly: '#fe2c55',
        
      },

    },

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'] 
    },
  },

  plugins: [],
};
