import { defineConfig } from "vitest/config";

export default defineConfig({
  esbuild: {
    target: "node18",
  },
  test: {
    exclude: ["**/dist/**", "**/node_modules/**"],
    include: ["**/tests/**/*.spec.[tj]s"],
    testTimeout: 20_000,
  },
});
