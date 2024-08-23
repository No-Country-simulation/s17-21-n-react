/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const theme = {
  extend: {
    colors: {
      primary: "#1D4ED8",
      secondary: "#10B981",
      accent: "#F59E0B",
      background: "#F3F4F6",
      text: "#374151",
      border: "#E5E7EB",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Fira Code", "monospace"],
    },
    boxShadow: {
      custom: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    },
    borderRadius: {
      xl: "1.5rem",
    },
  },
};
export const plugins = [];
