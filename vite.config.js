import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/personalWeb/",
  plugins: [react()],
  build: {
    outDir: "dist", // Output directory
    assetsDir: "assets", // Directory for assets
    rollupOptions: {
      input: "src/main.jsx", // Correct path to the entry point
    },
  },
});
