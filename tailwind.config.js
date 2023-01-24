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
        'post-border-hover': '#898989',
        'nav-border': '#EDEFF1',
        'post-sidebar': '#F8F9FA',
        'meta-text': '#7c7c7c',
        'icon-hover': 'rgba(26,26,27,0.1)',
        'vote': '#cc3700',
        'primary-500': '#0079D3',
        'primary-400': '#3293db',
        'primary-300': '#7fbce9',
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
}
