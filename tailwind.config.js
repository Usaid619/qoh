/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: "var(--font-gothic)",
      },
      gridTemplateColumns: {
        hallmark: "repeat(3, minmax(20px, 1fr))",
      },
      screens: {
        xs: "480px",
        // "3xl": "1750px", // Full HD screens
        // "4xl": "2560px", // 2K, 4K screens
      },
      fontSize: {
        "10xl": "10rem", // New sizes after default 9xl
        "11xl": "12rem",
        "12xl": "14rem",
        "13xl": "16rem", // 256px
        "14xl": "18rem", // 288px
        "15xl": "20rem", // 320px
      },
      spacing: {
        112: "28rem", // Extending beyond 96
        128: "32rem",
        144: "36rem",
        160: "40rem",
        192: "48rem",
        224: "56rem",
        256: "64rem",
      },
      width: {
        128: "32rem", // Extending width sizes
        144: "36rem",
        160: "40rem",
        192: "48rem",
        256: "64rem",
        "screen-3xl": "1920px",
        "screen-4xl": "2560px",
      },
      height: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
        192: "48rem",
        256: "64rem",
        "screen-3xl": "1080px",
        "screen-4xl": "1440px",
      },
      maxWidth: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
      maxHeight: {
        "3xl": "1080px",
        "4xl": "1440px",
      },
    },
  },
  plugins: [],
};