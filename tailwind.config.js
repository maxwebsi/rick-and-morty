/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "linear-gradient(90.19deg, rgba(8, 12, 19, 0.95) 45.13%, rgba(30, 30, 30, 0) 98.3%), url('/images/banner.jpg')",
        'single-episode': 'linear-gradient(180deg, #1A56DB 0%, #111827 100%)'
      },
    },
  },
  plugins: [],
}
