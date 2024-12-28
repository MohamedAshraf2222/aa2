/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A42B2B",
        secondary: "#c2c2c2",
        darkBg: "#182333",
        lightGray: "#828893",
      },
    },
  },
  plugins: [],
};
