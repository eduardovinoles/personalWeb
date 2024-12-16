import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/personalWeb/",
  build: {
    outDir: "dist", // Default build output directory
    rollupOptions: {
      input: "index.html", // Specify entry point
    },
  },
});
