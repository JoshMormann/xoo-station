/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme colors based on Figma design
        'dark-bg': '#121212',
        'dark-surface': '#1E1E1E',
        'dark-primary': '#BB86FC',
        'dark-secondary': '#03DAC6',
        'dark-error': '#CF6679',
        'dark-text-primary': '#FFFFFF',
        'dark-text-secondary': 'rgba(255, 255, 255, 0.7)',
        'dark-text-disabled': 'rgba(255, 255, 255, 0.38)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 