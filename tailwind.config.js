/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        'brand-red': '#FF0000',
      },
      fontFamily: {
        heading: ["Gilroy-Bold", "sans-serif"],
        body: ["Gilroy-Bold", "sans-serif"],
        sans: ["Gilroy-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
}
