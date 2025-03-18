/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#AA42D8", // Primary color
          light: "#6366F1",
          dark: "#4338CA",
        },
        secondary: {
          DEFAULT: "#EC4899", // Secondary color
          light: "#F472B6",
          dark: "#BE185D",
        },
        text: {
          primary: "#1E293B", // Dark Gray (Primary text color)
          secondary: "#64748B", // Lighter Gray (Secondary text)
        },
    },
  },
},
  plugins: [],
};
