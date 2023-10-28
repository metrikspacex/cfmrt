const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: ["./dist/index.cjs"],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  root: true,
});
