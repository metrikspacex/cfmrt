import { defineConfig } from 'eslint-define-config';
import { builtinModules } from 'node:module';

const index = defineConfig({
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "eslint:all",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:n/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/all",
    "plugin:react/jsx-runtime",
    "plugin:regexp/recommended",
    "plugin:sonarjs/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:unicorn/all",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ["**/dist/**", "**/node_modules/**"],
  overrides: [
    {
      env: {
        node: true
      },
      files: ["*.{js,cjs,mjs}"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
      },
      rules: {}
    },
    {
      env: {
        node: true
      },
      extends: [
        "plugin:@typescript-eslint/all",
        "plugin:@typescript-eslint/stylistic"
      ],
      files: ["*.{ts}"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: "latest",
        project: ["tsconfig*.json"],
        sourceType: "module"
      },
      rules: {
        "@typescript-eslint/array-type": ["error"],
        "@typescript-eslint/ban-ts-comment": ["error"],
        "@typescript-eslint/ban-tslint-comment": ["error"],
        "@typescript-eslint/ban-types": ["error"],
        "@typescript-eslint/consistent-generic-constructors": ["error"],
        "@typescript-eslint/consistent-indexed-object-style": ["error"],
        "@typescript-eslint/consistent-type-definitions": ["error"],
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            disallowTypeAnnotations: false,
            prefer: "type-imports"
          }
        ],
        "@typescript-eslint/explicit-function-return-type": ["error"],
        "@typescript-eslint/explicit-module-boundary-types": [
          "error",
          {
            allowArgumentsExplicitlyTypedAsAny: true
          }
        ],
        "@typescript-eslint/lines-between-class-members": ["error"],
        "@typescript-eslint/naming-convention": ["error"],
        "@typescript-eslint/no-confusing-void-expression": ["error"],
        "@typescript-eslint/no-empty-function": [
          "error",
          {
            allow: ["arrowFunctions"]
          }
        ],
        "@typescript-eslint/no-empty-interface": ["error"],
        "@typescript-eslint/no-explicit-any": ["error"],
        "@typescript-eslint/no-extra-semi": ["error"],
        "@typescript-eslint/no-extraneous-class": ["error"],
        "@typescript-eslint/no-inferrable-types": ["error"],
        "@typescript-eslint/no-magic-numbers": ["off"],
        "@typescript-eslint/no-misused-promises": ["error"],
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/no-throw-literal": ["error"],
        "@typescript-eslint/no-type-alias": ["error"],
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error"],
        "@typescript-eslint/no-unnecessary-condition": ["error"],
        "@typescript-eslint/no-unsafe-argument": ["error"],
        "@typescript-eslint/no-unsafe-assignment": ["error"],
        "@typescript-eslint/no-unsafe-call": ["error"],
        "@typescript-eslint/no-unsafe-member-access": ["error"],
        "@typescript-eslint/no-unsafe-return ": ["error"],
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
            varsIgnorePattern: "^_"
          }
        ],
        "@typescript-eslint/no-useless-constructor": ["error"],
        "@typescript-eslint/no-var-requires": ["error"],
        "@typescript-eslint/non-nullable-type-assertion-style": ["error"],
        "@typescript-eslint/prefer-enum-initializers": ["error"],
        "@typescript-eslint/prefer-for-of": ["error"],
        "@typescript-eslint/prefer-function-type": ["error"],
        "@typescript-eslint/prefer-readonly-parameter-types": ["error"],
        "@typescript-eslint/require-await": ["error"],
        "@typescript-eslint/restrict-template-expressions": ["error"]
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "react",
    "react-hooks",
    "react-refresh",
    "regexp",
    "simple-import-sort",
    "sonarjs",
    "prettier"
  ],
  root: true,
  rules: {
    "accessor-pairs": ["error"],
    "array-callback-return": ["error"],
    "block-scoped-var": ["error"],
    "capitalized-comments": ["error"],
    "class-methods-use-this": ["off"],
    complexity: ["error"],
    "consistent-return": ["error"],
    curly: ["error"],
    "default-case": ["error"],
    "dot-notation": ["error"],
    eqeqeq: [
      "warn",
      "always",
      {
        null: "never"
      }
    ],
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "guard-for-in": ["error"],
    "id-length": ["error"],
    "import/extensions": [
      "error",
      "never",
      {
        cjs: "ignorePackages",
        js: "ignorePackages",
        json: "ignorePackages",
        jsx: "ignorePackages",
        mjs: "ignorePackages",
        ts: "ignorePackages",
        tsx: "ignorePackages"
      }
    ],
    "import/first": ["error"],
    "import/newline-after-import": ["error"],
    "import/no-duplicates": ["error"],
    "import/no-extraneous-dependencies": ["error"],
    "import/no-named-as-default": ["error"],
    "import/no-nodejs-modules": [
      "error",
      {
        allow: builtinModules.map((module_) => `node:${module_}`)
      }
    ],
    "import/no-unresolved": ["error"],
    "import/order": ["off"],
    "import/prefer-default-export": ["off"],
    indent: [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    "jsx-a11y/click-events-have-key-events": ["error"],
    "jsx-a11y/media-has-caption": ["error"],
    "jsx-a11y/no-noninteractive-element-interactions": ["error"],
    "line-comment-position": ["error"],
    "linebreak-style": ["error", "unix"],
    "max-depth": ["error"],
    "max-len": [
      "error",
      {
        code: 80,
        comments: 80,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        tabWidth: 2
      }
    ],
    "max-lines": ["off"],
    "max-lines-per-function": ["error"],
    "max-statements": ["error"],
    "multiline-comment-style": ["error"],
    "n/no-deprecated-api": ["error"],
    "n/no-extraneous-import": [
      "error",
      {
        allowModules: ["less", "sass", "unbuild", "vite", "vitest"]
      }
    ],
    "n/no-extraneous-require": [
      "error",
      {
        allowModules: ["vite"]
      }
    ],
    "n/no-missing-import": ["error"],
    "n/no-missing-require": [
      "error",
      {
        allowModules: ["pnpapi", "vite"],
        tryExtensions: [".d.ts", ".js", ".jsx", ".ts", ".tsx"]
      }
    ],
    "n/no-process-exit": ["error"],
    "n/no-unpublished-import": ["error"],
    "n/no-unpublished-require": ["error"],
    "n/no-unsupported-features/es-syntax": ["error"],
    "n/shebang": ["off"],
    "new-cap": ["error"],
    "no-alert": ["error"],
    "no-caller": ["error"],
    "no-console": [
      "error",
      {
        allow: ["clear", "dir", "error", "info", "log", "trace", "warn"]
      }
    ],
    "no-constant-condition": ["error"],
    "no-continue": ["error"],
    "no-debugger": ["error"],
    "no-div-regex": ["error"],
    "no-duplicate-imports": "error",
    "no-else-return": ["error"],
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true
      }
    ],
    "no-empty-function": ["error", { allow: ["arrowFunctions"] }],
    "no-empty-pattern": ["error"],
    "no-eq-null": ["error"],
    "no-eval": ["error"],
    "no-extend-native": ["error"],
    "no-extra-bind": ["error"],
    "no-extra-label": ["error"],
    "no-floating-decimal": ["error"],
    "no-global-assign": ["error"],
    "no-implicit-coercion": ["error"],
    "no-implicit-globals": ["error"],
    "no-implied-eval": ["error"],
    "no-inline-comments": ["error"],
    "no-invalid-this": ["error"],
    "no-iterator": ["error"],
    "no-labels": ["error"],
    "no-lone-blocks": ["error"],
    "no-lonely-if": ["error"],
    "no-loop-func": ["error"],
    "no-magic-numbers": ["off"],
    "no-multi-spaces": ["error"],
    "no-multi-str": ["error"],
    "no-new": ["error"],
    "no-new-func": ["error"],
    "no-new-wrappers": ["error"],
    "no-octal-escape": ["error"],
    "no-param-reassign": ["error"],
    "no-plusplus": ["error"],
    "no-process-exit": ["error"],
    "no-proto": ["error"],
    "no-return-assign": ["error"],
    "no-return-await": ["error"],
    "no-script-url": ["error"],
    "no-self-compare": ["error"],
    "no-sequences": ["error"],
    "no-shadow": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-ternary": ["error"],
    "no-undefined": ["error"],
    "no-underscore-dangle": ["off"],
    "no-unused-expressions": ["error"],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }
    ],
    "no-useless-concat": ["error"],
    "no-useless-constructor": ["error"],
    "no-useless-escape": ["error"],
    "one-var": ["error"],
    "prefer-const": [
      "warn",
      {
        destructuring: "all"
      }
    ],
    "prettier/prettier": [
      "error",
      {
        arrowParens: "always",
        bracketSameLine: true,
        bracketSpacing: true,
        endOfLine: "lf",
        htmlWhitespaceSensitivity: "strict",
        jsxSingleQuote: false,
        printWidth: 80,
        proseWrap: "always",
        quoteProps: "as-needed",
        semi: true,
        singleAttributePerLine: false,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "es5",
        useTabs: false
      }
    ],
    quotes: ["error", "double"],
    radix: ["error"],
    "react-hooks/exhaustive-deps": ["error"],
    "react-hooks/rules-of-hooks": ["error"],
    "react-refresh/only-export-components": ["error"],
    "react/button-has-type": ["error"],
    "react/display-name": ["error"],
    "react/forbid-component-props": ["error"],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function"
      }
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        children: "never",
        props: "never"
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"]
      }
    ],
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-key": ["error"],
    "react/jsx-max-depth": [
      "error",
      {
        max: 5
      }
    ],
    "react/jsx-no-bind": ["error"],
    "react/jsx-no-duplicate-props": ["error"],
    "react/jsx-no-literals": ["error"],
    "react/jsx-no-undef": ["error"],
    "react/jsx-no-useless-fragment": ["error"],
    "react/jsx-one-expression-per-line": ["error"],
    "react/jsx-props-no-multi-spaces": ["error"],
    "react/jsx-props-no-spreading": ["error"],
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        ignoreCase: true,
        shorthandFirst: true
      }
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        beforeSelfClosing: "always"
      }
    ],
    "react/jsx-uses-react": ["error"],
    "react/no-array-index-key": ["error"],
    "react/no-children-prop": ["error"],
    "react/no-danger-with-children": ["error"],
    "react/no-direct-mutation-state": ["error"],
    "react/no-this-in-sfc": ["error"],
    "react/no-unescaped-entities": ["error"],
    "react/prop-types": ["error"],
    "react/react-in-jsx-scope": ["error"],
    "react/require-default-props": ["error"],
    "react/self-closing-comp": ["error"],
    "react/void-dom-elements-no-children": ["error"],
    "regexp/no-contradiction-with-assertion": ["error"],
    semi: ["error", "always"],
    "simple-import-sort/exports": ["error"],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          [
            "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)"
          ],
          ["^\\u0000"],
          ["^\\w"],
          ["^@"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]
        ]
      }
    ],
    "sonarjs/cognitive-complexity": ["error"],
    "sonarjs/no-duplicate-string": ["error"],
    "sonarjs/no-empty-collection": ["error"],
    "sonarjs/no-redundant-jump": ["error"],
    "sonarjs/prefer-immediate-return": ["error"],
    "sort-imports": [
      "error",
      {
        allowSeparatedGroups: false,
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
      }
    ],
    "spaced-comment": ["error"],
    strict: ["error"],
    "tailwindcss/no-custom-classname": ["error"],
    "unicorn/consistent-function-scoping": ["error"],
    "unicorn/error-message": ["error"],
    "unicorn/filename-case": ["error"],
    "unicorn/no-abusive-eslint-disable": ["error"],
    "unicorn/no-array-reduce": ["error"],
    "unicorn/no-empty-file": ["off"],
    "unicorn/no-keyword-prefix": ["off"],
    "unicorn/no-negated-condition": ["error"],
    "unicorn/no-null": ["error"],
    "unicorn/no-useless-undefined": ["error"],
    "unicorn/prefer-at": ["error"],
    "unicorn/prefer-dom-node-dataset": ["error"],
    "unicorn/prefer-event-target": ["error"],
    "unicorn/prefer-includes": ["error"],
    "unicorn/prefer-number-properties": ["error"],
    "unicorn/prefer-query-selector": ["error"],
    "unicorn/prefer-spread": ["error"],
    "unicorn/prefer-switch": ["error"],
    "unicorn/prefer-ternary": ["error"],
    "unicorn/prefer-top-level-await": ["error"],
    "unicorn/prevent-abbreviations": ["error"],
    "unicorn/switch-case-braces": ["error"]
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"]
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      typescript: {
        alwaysTryTypes: true,
        project: ["./tsconfig*.json"]
      }
    },
    "jsx-a11y": {},
    react: {
      version: "detect"
    },
    tailwindcss: {
      callees: ["classnames", "clsx", "ctl"],
      classRegex: "^class(Name)?$",
      config: "tailwind.config.ts",
      cssFiles: [
        "!**/.*",
        "!**/build",
        "!**/dist",
        "!**/node_modules",
        "**/*.css",
        "**/*.scss"
      ],
      cssFilesRefreshRate: 5e3,
      removeDuplicates: true,
      skipClassAttribute: false,
      tags: [],
      whitelist: []
    }
  }
});

export { index as default };
