/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Add components folder if you have it
    "./public/**/*.{html,js}", // Include public directory if you're using any static HTML
    './app/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
});
