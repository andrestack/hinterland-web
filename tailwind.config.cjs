/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "rgb(var(--color-bg))",
        "box-bg": "rgb(var(--color-box))",
        "box-shadow": "rgb(var(--box-sd))",
        "box-border": "rgb(var(--box-border))",
        primary: "#42b3e8",
        secondary: "#143144",
        tertiary: "#d8e5cf",
        // hover: "#42b3e8",
        "heading-1": "rgb(var(--heading-1))",
        "heading-2": "rgb(var(--heading-2))",
        "heading-3": "rgb(var(--heading-3))",
      },
      screens: {
        midmd: "880px",
      },
    },
    perspective: {
      1000: "1000px",
    },
    keyframes: {
      "float-tilt": {
        "0%, 100%": { transform: "translateY(0) rotate3d(0, 1, 0, 0deg)" },
        "25%": { transform: "translateY(-15px) rotate3d(0, 1, 0, 5deg)" },
        "50%": { transform: "translateY(-30px) rotate3d(0, 1, 0, 0deg)" },
        "75%": { transform: "translateY(-15px) rotate3d(0, 1, 0, -5deg)" },
      },
      
    },
    animation: {
      "float-tilt": "float-tilt 6s ease-in-out infinite",
      
    },
  },

  plugins: [require("@tailwindcss/typography"), "@relume_io/relume-ui"],
};
