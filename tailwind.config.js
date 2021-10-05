const { mauveDark, crimsonDark, amberDark } = require("@radix-ui/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...mauveDark,
        ...crimsonDark,
        ...amberDark,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
