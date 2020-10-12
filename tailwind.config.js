module.exports = {
  purge: ["./site/**/*.njk"],
  theme: {
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "3rem",
      },
    },
    colors: {
      gray: "#303030",
      white: "#FCF9F7",
      yellow: "#FFB906",
      red: "#F86849",
      "red-light": "#E85E40",
      blue: "#8CCBD9",
      none: "transparent",
    },
    fontFamily: {
      display: ["presicav", "inter", "sans-serif", "Arial"],
      text: ["Arial Narrow", "sans-serif", "Arial"],
    },
    extend: {
      fontSize: {
        "3xl": "1.75rem",
        "7xl": "5rem",
        "8xl": "6rem",
      },
      letterSpacing: {
        narrow: ".015em",
      },
      rotate: {
        "-3": "-3deg",
        3: "3deg",
        "-15": "-15deg",
        15: "15deg",
      },
      spacing: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        full: "100%",
      },
      lineHeight: {
        tight: "1.15",
        snug: "1.25",
        comfy: "1.4",
      },
      zIndex: {
        "-1": "-1",
      },
      borderWidth: {
        "1-5": "1.5px",
        6: "6px",
      },
      borderRadius: {
        lg: "2.5rem",
      },
      translate: {
        50: "50%",
        "-50": "-50%",
        25: "25%",
        "-25": "-25%",
      },
      transitionDuration: {
        0: "0",
      },
      keyframes: {
        slam: {
          "0%": { opacity: "0", transform: "scale(2)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        slam: "slam .1s .15s ease-out both",
        spin: "spin 30s linear infinite",
        "spin-fast": "spin 1s linear infinite",
      },
    },
  },
  variants: {
    opacity: ["hover", "group-hover"],
    visibility: ["hover", "group-hover"],
    rotate: ["hover", "group-hover"],
    scale: ["hover", "group-hover"],
    translate: ["hover", "group-hover", "focus", "responsive"],
    backgroundColor: ["hover", "even", "odd", "responsive"],
    padding: ["responsive", "first", "last"],
    display: ["responsive", "hover", "group-hover"],
    boxShadow: ["responsive", "hover", "group-hover"],
  },
  plugins: [],
};
