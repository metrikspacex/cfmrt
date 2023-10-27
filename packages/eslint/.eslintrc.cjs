const { defineConfig } = require("eslint-define-config");
module.exports = defineConfig({
	extends: ["./dist/index.cjs"],
  parserOptions: {
    project: [`${__dirname}/tsconfig.json`],
    tsconfigRootDir: __dirname
  },
	settings: {
		"import/resolver": {
			typescript: {
				project: [`${__dirname}/tsconfig.json`],
			},
		},
	},
  root: true,
});
