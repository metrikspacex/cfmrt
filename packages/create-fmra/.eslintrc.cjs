const { defineConfig } = require("eslint-define-config");
require("@cfmrt/eslint/patch");

module.exports = defineConfig({
  extends: ["@cfmrt/eslint"],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  root: true,
});
