import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
  	extend: {
  		colors: {
        "primary": "rgb(var(--primary-color))",

        "primary-bg": "rgb(var(--primary-bg-color))",
        "secondary-bg": "rgb(var(--secondary-bg-color))",
        "ternary-bg": "rgb(var(--ternary-bg-color))",

        "error": "rgb(var(--error-color))"
			},
      boxShadow: {
        sm: "0 0px 10px -5px rgba(0, 0, 0, 0.3)"
      }
  	}
  },
  plugins: [],
};

export default config;
