import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  alias: {},
  clean: true,
  declaration: true,
  entries: [
    {
      input: "./src/index.ts",
      outDir: "dist",
    },
    {
      input: "./src/patch.ts",
      outDir: "dist",
    },
  ],
  hooks: {},
  outDir: "dist",
  rollup: {
    emitCJS: true,
    esbuild: {
      minify: false,
      sourcemap: true,
      target: "node18",
    },
    inlineDependencies: true,
  },
});
