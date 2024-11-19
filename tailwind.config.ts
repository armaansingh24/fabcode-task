import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B99FF",
        secondery: "#ffffff",
        seconderyBackground: "#F5F8FC",
        warning: "#FF3F3F",
        green: "#23FF53",
      },
    },
  },
  plugins: [],
};

export default config;
