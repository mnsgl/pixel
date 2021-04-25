module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        136: "36rem",
      },
    },
    container: {
      center: true,
    },
    boxShadow: {
      xl: "0 20px 20px -5px rgba(0, 0, 0, 0.5)",
      md: "0 0px 15px 5px rgba(0, 0, 0, .1)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
