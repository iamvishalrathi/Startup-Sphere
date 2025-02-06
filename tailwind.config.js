/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#1F2937",
        'primary-dark': "#1E3A8A",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 