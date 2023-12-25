/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Amaranth, sans-serif",
        adanda: "Andada Pro, sans-serif",
        alfa: "Alfa Slab One, cursive",
        recursive: "Recursive, sans-serif",
        urbanist: "Urbanist, sans-serif",
        arvo: "Arvo, serif",
        amethysta: "Amethysta, serif",
        peddana: "Peddana, serif",
        noticia: "Noticia Text, serif",
        encodesans: "Encode Sans, sans-serif",
        arbtus: "Arbutus, cursive",
      },
    },
  },
  plugins: [],
};
