/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sticker-pink': '#FF6B81',
        'sticker-blue': '#4ECDC4',
        'sticker-yellow': '#FFE66D',
        'sticker-purple': '#C77DFF',
        'sticker-orange': '#FF9F1C',
        'sticker-green': '#7ED957',
        'sticker-dark': '#2C3E50',
      },
    },
  },
  plugins: [],
}