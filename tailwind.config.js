/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
  ],
  darkMode: "class",
  theme: {
    // padding: {
    //   main: "10rem",
    // },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
