export default {
  theme: {
    extend: {
      colors: {
        "color-1": "#003b49",
        "color-2": "#93b7bb",
        "color-3": "#acc37e",
        "color-4": "#e3d268",
        "color-5": "#55555a",
        "color-6": "#dddddd",
        text: {
          default: "#888888",
          dark: "#222",
          light: "#ceced0",
        },
      },
      screens: {
        xs: "340px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1366px",
      },

      spacing: {
        15: "3.75rem",
        18: "4.5rem",
        26: "6.5rem",
        73: "18.25rem",
      },
      zIndex: {
        2: "2",
        36: "36",
        99: "99",
      },
      maxWidth: {
        4: "1rem",
        6: "1.5rem",
        7: "1.75rem",
      },
      fontFamily: {
        primary: ["Prompt", "sans-serif"],
      },
    },
  },
  content: [
    "./app/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  plugins: [
    function ({ addBase, theme }: any) {
      addBase({
        ":root": {
          "--color-1": theme("colors.color-1"),
          "--color-2": theme("colors.color-2"),
          "--color-3": theme("colors.color-3"),
          "--color-4": theme("colors.color-4"),
          "--color-5": theme("colors.color-5"),
          "--color-6": theme("colors.color-6"),
          "--text-default": theme("colors.text.default"),
          "--text-dark": theme("colors.text.dark"),
          "--text-light": theme("colors.text.light"),
        },
      });
    },
  ],
};
