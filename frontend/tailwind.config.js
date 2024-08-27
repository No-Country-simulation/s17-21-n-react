/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const theme = {
  extend: {
    colors: {
      primary: "#2b4eff",
      secondary: "#0e1133",
      base_white: "#f5f5f5",
      base_black: "#0a0a0b",
      success: "#58FC2F",
      warning: "#f6161f",
      error: "#40298b",
      background_primary: "##F4F5F9",
      text_primary: "#374151",
      text_secondary: "#7A797F",
      border: "#E5E7EB",
    },
    fontFamily: {
      hind: ["Hind", "sans-serif"],
    },
    boxShadow: {
      custom: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    },
  },
};
export const plugins = [];
