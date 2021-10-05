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
      backgroundImage: {
        grain: "url('https://grainy-gradients.vercel.app/noise.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
