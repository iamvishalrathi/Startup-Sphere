/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B21A8', // Purple
          dark: '#581C87',
          light: '#8B5CF6',
        },
        secondary: {
          DEFAULT: '#1E40AF', // Dark Blue
          dark: '#1E3A8A',
          light: '#3B82F6',
        },
        dark: {
          DEFAULT: '#111827',
          light: '#1F2937',
          darker: '#0F172A',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 