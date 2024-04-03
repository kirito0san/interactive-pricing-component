/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        SoftCyan: "#a5f3eb",
        StrongCyan: "#10d5c2",
        LightGrayishRed: "#feece7",
        LightRed: "#ff8c66",
        PaleBlue: "#bdccff",
        VeryPaleBlueBlue: "#fafbff",
        LightGrayishBlue1: "#eaeefb",
        LightGrayishBlue2: "#cdd7ee",
        GrayishBlue: "#858fad",
        DarkDesaturatedBlue: "#293356",
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"]
      }

    },
  },
  plugins: [],
}