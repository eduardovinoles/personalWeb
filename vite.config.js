import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Make sure the output directory is correctly set to 'dist'
    rollupOptions: {
      input: "index.html", // Make sure the entry point is correctly defined
    },
  },
});
