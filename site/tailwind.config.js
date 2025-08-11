/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        primary: "hsl(var(--primary))",
        border: "hsl(var(--border))",
      },
    },
  },
  safelist: ["md:grid-cols-1","md:grid-cols-2","md:grid-cols-3","md:grid-cols-4"],
  plugins: [],
};
