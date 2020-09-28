module.exports = {
  purge: ["./site/**/*.njk"],
  theme: {
    container: {
      center: true,
      padding: {
        default: ".75rem",
        sm: "1rem",
        lg: "2rem",
      },
    },
    colors: {
      gray: "#353535",
      white: "#FCF9F7",
      yellow: "#FFB906",
      red: "#F86849",
      blue: "#8CCBD9",
    },
    fontFamily: {
      display: ["presicav", "inter", "sans-serif", "Arial"],
      text: ["Arial Narrow", "sans-serif", "Arial"],
    },
    extend: {
      fontSize: {
        "3xl": "1.75rem",
        "7xl": "5rem",
      },
      rotate: {
        "-3": "-3deg",
        3: "3deg",
      },
    },
  },
  variants: {
    opacity: ["hover", "group-hover"],
    visibility: ["hover", "group-hover"],
    rotate: ["hover", "group-hover"],
  },
  plugins: [],
};
