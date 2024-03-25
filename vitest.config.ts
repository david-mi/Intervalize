
import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      "@langs": resolve(__dirname, "./src/langs"),
      "@": resolve(__dirname, "./src"),
    },
  },
});