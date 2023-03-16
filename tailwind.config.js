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
        'field': '#F6F7F8',
        'post-border': '#ccc',
        'post-border-hover': '#898989',
        'nav-border': '#EDEFF1',
        'nav-icon': '1A1A1B',
        'nav-icon-hov': 'rgba(26,26,27,0.1)',
        'nav-icon-active': 'rgba(26,26,27,0.15)',
        'post-sidebar': '#F8F9FA',
        'comment-controls': '#F6F7F8',
        'meta-text': '#7c7c7c',
        'icon-hover': 'rgba(26,26,27,0.1)',
        'upvote': '#FF4500',
        'downvote': '#7193FE',
        'primary-500': '#0079D3',
        'primary-400': '#3293db',
        'primary-300': '#7fbce9',
        'inv-green-500': '#349F48',
        'feed-text': '#878A8C',
        'community-button-alpha40': 'rgba(0,121,211,0.4)',
        'input-focused': '#1A1A1B',
        'link-text': '#0079D3',
        'dropdown-category': '#787c7e',
        'dropdown-item-hover': 'rgba(0,0,0,0.04)',
        'post-transparent-20': 'rgba(255,255,255,0.8)',
        'blue-highlight': '#e9f5fd',
      },
      boxShadow: {
        'modal': '1px 7px 20px 2px rgba(0, 0, 0, 0.4)'
      },
      backgroundImage: {
        'stock-banner': "url('/src/assets/images/stock-banner.jpg')",
      }
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
}
