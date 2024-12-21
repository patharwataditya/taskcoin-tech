/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customYellow: {
          100: "#FDFD96",
          200: "#FFDB58",
          300: "#F4D738",
          400: "#E3A018",
        },
        customGreen: {
          100: "#BAFCA2",
          200: "#90EE90",
          300: "#7FBC8C",
        },
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite', // Apply the animation with a duration of 10s
      },
    },
  },
  plugins: [],
};
