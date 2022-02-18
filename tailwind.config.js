module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        fontClamp: "clamp(2.25rem, 4vw, 3.8rem)",
      },
      screens: {
        cmd: "1075px",
      },
    },
  },
  plugins: [],
};
