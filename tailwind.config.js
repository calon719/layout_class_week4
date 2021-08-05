module.exports = {
  purge: {
    enabled: false,
    content: ["./app/**/*.html", "./app/assets/style/**/*.scss"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#650300",
      secondary: "#AA06010D",
      info: "#5F3E2D",
      warning: "#B75929",
      danger: "#AA0601",
      white: "#fff",
      dark: "#000000",
      "gray-100": "#F2F2F2",
      "gray-600": "#707070",
      "gray-700": "#555555",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      notoSans: ["Noto Sans TC", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "3rem",
      "7xl": "3.5rem",
      "8xl": "4rem",
      "9xl": "4.5rem",
    },
    extend: {
      padding: {
        15: "3.75rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
