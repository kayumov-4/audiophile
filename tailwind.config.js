/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "orange-dark": "#D87D4A",
        "orange-light": "#fbaf85",
        "silver-dark": "#F1F1F1",
        "silver-light": "#FAFAFA",
      },
      backgroundImage: {
        "zx-7": "url('./src/images/zx7.png')",
      },
    },
  },
  plugins: [],
};
