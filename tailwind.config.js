/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#9fed93",

          "secondary": "#3ca6fc",

          "accent": "#5ae83e",

          "neutral": "#181920",

          "base-100": "#323036",

          "info": "#3564E3",

          "success": "#105B4F",

          "warning": "#EBBA47",

          "error": "#FB4B5A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}