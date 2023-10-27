const { defineConfig } = require("eslint-define-config");
require("@cfmrt/eslint/patch");

module.exports = defineConfig({
	extends: ["@cfmrt/eslint"],
	ignorePatterns: ["dist", "node_modules"],
  parserOptions: { tsconfigRootDir: __dirname },
  root: true,
	settings: {
		"import/resolver": {
			typescript: {
				project: [__dirname + "/tsconfig.json"],
			},
		},
	},
});
