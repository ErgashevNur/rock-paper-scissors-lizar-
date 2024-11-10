/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "1px 3px 0px 19px rgba(254, 246, 246, 0.3)",
      },
    },
  },
  plugins: [require("daisyui")],
};