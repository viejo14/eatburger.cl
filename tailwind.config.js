/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./tests/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#090302",
          surface: "#120804",
          surfaceSoft: "#1f0d06",
          primary: "#f2a320",
          primaryStrong: "#ffbc3f",
          text: "#f5ede8",
          muted: "#d7c6be"
        }
      },
      fontFamily: {
        heading: ["Bree Serif", "serif"],
        body: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 24px rgba(242, 163, 32, 0.35)",
        panel: "0 24px 50px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "app-texture":
          "radial-gradient(circle at 10% 0%, rgba(245, 92, 34, 0.18), transparent 42%), radial-gradient(circle at 90% 12%, rgba(242, 163, 32, 0.22), transparent 35%), linear-gradient(180deg, #0c0402 0%, #150803 56%, #0a0302 100%)",
        "overlay-dark":
          "linear-gradient(120deg, rgba(0, 0, 0, 0.82), rgba(18, 8, 4, 0.72) 45%, rgba(0, 0, 0, 0.58))",
        "hero-cinematic":
          "radial-gradient(circle at 15% 38%, rgba(242, 163, 32, 0.34), transparent 44%), radial-gradient(circle at 84% 16%, rgba(240, 78, 24, 0.44), transparent 42%), linear-gradient(120deg, rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.26))",
        "hero-vignette":
          "radial-gradient(ellipse at center, transparent 42%, rgba(0, 0, 0, 0.58) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.45))",
        "section-fire":
          "radial-gradient(circle at 50% 100%, rgba(255, 103, 35, 0.2), transparent 64%)",
        flame:
          "radial-gradient(circle at 20% 20%, rgba(245, 96, 35, 0.5), rgba(18, 8, 4, 0.85) 50%, rgba(6, 3, 2, 1) 100%)"
      },
      keyframes: {
        "flame-pulse": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.72"
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: "0.94"
          }
        }
      },
      animation: {
        "flame-pulse": "flame-pulse 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
