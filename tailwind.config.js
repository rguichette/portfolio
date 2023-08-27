/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": {
            width: "0",
            height: "0",
            display: "none",
            overflow: "hidden",
          },

          "85%": {
            display: "block",
            width: "10px",
            height: "10px",
            overflow: "hidden",
          },

          "95%": {
            width: "30px",
            height: "30px",
            overflow: "hidden",
          },
        },
      },
      animation: {
        "fade-iin": "fadeIn .7s ease-in forwards",
        "fade-oout": "fadeIn .4s ease-in-out foward",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
