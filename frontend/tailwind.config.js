/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const theme = {
  extend: {
    colors: {
      primary: "#2b4eff",
      secondary: "#0e1133",
      secondary_hover: "#1a1d66",
      base_white: "#f5f5f5",
      base_black: "#0a0a0b",
      success: "#58FC2F",
      warning: "#f6161f",
      warning_hover: "#C81010",
      error: "#40298b",
      background_primary: "#F4F5F9",
      text_primary: "#374151",
      text_secondary: "#CBD5E1",
      lightGray: "#A1A2AB",
      border: "#E5E7EB",
      badge_blue: "#346EE0",
      badge_yellow: "#EFB540",
      badge_green: "#20B799",
      badge_red: "#F15050",
      badge_bg_blue: "rgba(52, 110, 224, 0.18)",
      badge_bg_yellow: "rgba(239, 181, 64, 0.18)",
      badge_bg_green: "rgba(32, 183, 153, 0.18)",
      badge_bg_red: "rgba(241, 80, 80, 0.18)",
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
