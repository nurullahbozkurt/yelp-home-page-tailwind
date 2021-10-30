module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        headerBackgroundImage: "url('/img/image3.jpeg')",
      },
      width: {
        "16px": "16px",
        "20px": "20px",
        "24px": "24px",
        "152px": "152px",
        "72px": "72px",
        "15px": "15px",
        "220px": "220px",
      },
      height: {
        "16px": "16px",
        "20px": "20px",
        "24px": "24px",
        "153px": "153px",
        "72px": "72px",
        "15px": "15px",
        "220px": "220px",
      },
      boxShadow: {
        custom: "0 2px 18px rgb(0 0 0 / 15%)",
      },
      fontFamily: {
        openSans: [
          "Open Sans",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
