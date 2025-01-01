/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#160C22",
        brown: "#BCA029",
        "bright-orange": "#f9d342",
        "light-yellow": "#ffffe0",
        munsell: "#0093af",
        "dark-brown": "#292826",
        text: {
          default: "#584B13",
          dark: "#535353",
        },
        primary: {
          500: "#292826",
        },
        error: {
          500: "#D42620",
          50: "#FBEAE9",
        },
        success: {
          500: "#0F973D",
          50: "#E7F6EC",
        },
        schemes: {
          primary: {
            default: "#65558F",
            container: "#EADDFF",
          },
        },
      },
      fontFamily: {
        outfit: "Outfit",
      },
      backgroundImage: {
        "benefit-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)",
      },
      boxShadow: {
        switch: "0px 1px 3px 0px #00000066",
      },
      fontSize: {
        "2xs": "10px",
      },
      keyframes: {
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "var(--final-width)" },
        },
      },
      animation: {
        progress: "progress 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
