module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primaryPink: "#F7BDD6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
