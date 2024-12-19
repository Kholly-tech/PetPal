/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00897B",
        secondary: "#FFB74D",
        lightGy: "#F2F2F2",
        black: "#202020",
        semiBlack: "#2D2D2D",
        lightBlack: "#474747",
        darkWhite: "#BEBEBE",
        white: "#FFFFFF",
        semiWhite: "#E6E6E6",
        bg: "#FBE9E7",
      },
    },
  },
  plugins: [],
};
