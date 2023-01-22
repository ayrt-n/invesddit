/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'colors': {
        'canvas': '#DAE0E6',
        'canvas-light': '#FFFFFF',
        'post-border': '#ccc',
        'nav-border': '#EDEFF1',
      },
    },
  },
  plugins: [],
}
