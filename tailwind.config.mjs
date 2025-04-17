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
      },
      backgroundImage:{
        bannerImg: "url('/images/harry-potter-aesthetic.jpg')",
        blackOverlay: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.8) 100%)",
        signupImg: "url('/images/parchment-paper-signup.png')",
        backgroundImg: "url('/images/parchment-background.png')",
      },
      fontFamily: {
        custom1: ['CustomFont1', 'sans-serif'],
        custom2: ['CustomFont2', 'serif'],
      },
    },
  },
  plugins: [],
};
