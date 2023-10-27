const { builtinModules } = require("node:module");
const { defineConfig } = require("eslint-define-config");
const _package = require("./package.json");
const crmaEslint = require("./dist/index.cjs");

module.exports = defineConfig({
  plugin: [crmaEslint],
  root: true,
});
