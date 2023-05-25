/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["logo", "sans-serif"],
      },
      colors: {
        black: "#1c1d25",
        white: "#fff",
        textGray: "#afb1c1",
        textBlue: "#0ea5e9",
        textHighlight: "#FF0000",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
