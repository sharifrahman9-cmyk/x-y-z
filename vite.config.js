import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(path.resolve(), "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(path.resolve(), "index.html"),
        pages: resolve(path.resolve(), "pages/index.html"),
      },
    },
  },
});
