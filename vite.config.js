import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // 👈 Важно
// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(path.__dirname, "./src"), // 👈 Вот это создаёт алиас "@"
    },
  },
});
