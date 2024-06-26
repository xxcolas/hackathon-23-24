import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
});
