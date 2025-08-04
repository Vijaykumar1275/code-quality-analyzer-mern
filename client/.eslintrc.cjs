// .eslintrc.cjs
const globals = require("globals");

module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: [
    "@typescript-eslint",
    "react-hooks",
    "react-refresh"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "@typescript-eslint/no-unused-vars": "warn"
  },
  ignorePatterns: [
    "dist/",
    "node_modules/",
    "*.config.js"
  ],
  globals: {
    ...globals.browser,
    ...globals.node
  }
};
