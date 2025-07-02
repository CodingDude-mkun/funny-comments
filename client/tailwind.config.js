/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B81',
        secondary: '#4ECDC4',
        accent: '#FFE66D',
        background: '#2C3E50',
        textLight: '#FFFFFF',
        textDark: '#2C3E50',
      },
    },
  },
  plugins: [],
}