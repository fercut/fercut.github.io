/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: { 
      screens: {

        'md': '600px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}

