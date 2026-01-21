/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 35px rgba(124, 58, 237, 0.25)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at top, rgba(236, 72, 153, 0.25), transparent 55%)",
        "gradient-aurora":
          "linear-gradient(145deg, rgba(59,130,246,0.15), rgba(124,58,237,0.25), rgba(236,72,153,0.2))"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
