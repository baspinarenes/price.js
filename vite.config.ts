import { defineConfig, ViteUserConfig } from "vitest/config";
import dts from "vite-plugin-dts";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: "./tsconfig.json",
      exclude: "**/*.test.ts",
      rollupTypes: true,
    }),
    tsconfigPaths(),
  ] as ViteUserConfig["plugins"],

  build: {
    outDir: "dist",
    minify: "esbuild",
    lib: {
      entry: path.resolve(__dirname, "lib/index.ts"),
      name: "pricify",
      fileName: (format, entryName) =>
        format === "cjs" ? `${entryName}.cjs` : `${entryName}.js`,
      formats: ["es", "cjs"],
    },
    sourcemap: true,
    emptyOutDir: true,
  },

  test: {
    globals: true,
    include: ["lib/**/*.test.ts"],
    coverage: {
      reporter: ["text", "html"],
      include: ["lib"],
      all: true,
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
});
