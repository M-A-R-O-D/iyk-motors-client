/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1e7ed7',
        'custom-black': '#000000',
        'custom-white': '#f0efed',
        'custom-gray-deep': '#d9d9d9',
        'custom-gray-semi': '#706d6d',
        'custom-gray-light': '#f3f3f3',

      },

      height: {
        '100': "31rem",
        '105': "33.5rem",
        '110': "43rem",
        '111': "45rem",
      },
      
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },

  plugins: [
    require('tailwind-scrollbar')
  ]
}
