/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Define Roboto font
        robotic: ['Roboto Mono', 'monospace'], // Define Roboto Mono font
        'plex-mono': ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
