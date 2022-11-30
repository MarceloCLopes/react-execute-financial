/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-color": "#5BB462",
      "primary-dark": "#4F9C55",
      "secondary-color": "#FFEA00",
      "secondary-dark": "#E3D002",
      overlay: "rgba(0,0,0,0.7)",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
