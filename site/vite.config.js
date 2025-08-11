import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Uncomment and set this if using a project site on GitHub Pages:
  // base: "/<your-repo-name>/",
});