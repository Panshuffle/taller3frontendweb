/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        morado1: '#6c64ed',  // Color morado personalizado
        customWhite: '#f0f0f0'    // Color blanco personalizado
      },
    },
  },
  plugins: [],
}

