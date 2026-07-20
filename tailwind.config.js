/** @type {import('tailwindcss').Config} */
export default {
  // Scan these files for class names so Tailwind keeps only what you use.
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
