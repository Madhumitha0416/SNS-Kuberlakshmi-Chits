/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          500: '#D4AF37', // Royal Gold
          400: '#F3E5AB', // Soft Cream
        },
        brand: {
          red: '#8B0000', // Deep Red
          maroon: '#800000', // Traditional Maroon
          green: '#004B23', // Dark Emerald Green
        },
        neutral: {
          offwhite: '#FDFBF7', // Off White
          beige: '#F5F5DC', // Warm Beige
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

