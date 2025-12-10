module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyberA: "#07f7ff",
        cyberB: "#7b61ff",
        cyberC: "#00ffd1",
        bgDark: "#04060a",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
