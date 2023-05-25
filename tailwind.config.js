/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        isPrimary: '#025efe',
        isWhite5: '#f6fdff',
        isPrimary5: '#6196e7',
        isPrimary10: '#ecf3fe',
        isDark: '#1e2a53',
        isDark5: '#535b75',
        isDark7: '#9aa5b6',
        isDark10: '#323c5e',
        isGray: '#fafafc',
        isGray5: '#b0b6c7',
        isGray10: '#e8ecef',
        isGray15: '#ecf0f3',
      }
    },
  },
  plugins: [],
}