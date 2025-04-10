/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ==== Backgrounds ====
        surface: {
          default: "#FFFFFF", // components, header, footer, cards
          secondary: "#F6F7F9", // body
        },
        // ==== Accent Colors ====
        accent: {
          primary: "#3563E9",
          primaryLight: "#3563E94D", // 30% opacity
          secondary: "#54A6FF",
          secondaryLight: "#5CAFFC4D",
        },
        // ==== Text ====
        content: {
          light: "#FFFFFF",
          dark: "#1A202C", // headings
          base: "#90A3BF", // paragraph, reviewer name
          dimmed: "#C3D4E966", // borders
          soft: "#13131399", // footer links
          secondary: "#596780", // review text, placeholder, icons, review text
        },
        // ==== Reviews ====
        star: {
          filled: "#FBAD39", // filled star
          empty: "#90A3BF", // empty star
        },
        // ==== Favorites / Likes ====
        heart: {
          filled: "#ED3F3F", // filled hear
          empty: "#90A3BF", // empty heart
        },
        // ==== Notifications ====
        alert: "#FF4423", // notification dot
        // ==== Charts ====
        chart: {
          100: "#A6CEF2",
          200: "#63A9E8",
          300: "#2185DE",
          400: "#175D9C",
          500: "#0D3559",
        },
      },
    },
  },
  plugins: [],
};
