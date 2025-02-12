/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          sm: "2rem",
        },
      },
      colors: {
        primary: "#ff2c1f",
        textColor: "#020307",
        bgColor: "#fff",
      },
    },
  },
  plugins: [],
};
