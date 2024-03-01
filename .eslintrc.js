/**
 * @type {import("eslint").Linter.Config}
 */

const config = {
  root: true,
  plugins: [
    "@stylistic",
  ],
  extends: [
    "universe/native",
  ],
  rules: {
    // "import/order": "off",
    // "react/jsx-curly-brace-presence": ["off"],
    // "import/order": ["error", { "newlines-between": "never" }],
    "prettier/prettier": "off",
    "no-duplicate-imports": "error",
    "@stylistic/no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "@stylistic/jsx-sort-props": "error",
    "@stylistic/jsx-max-props-per-line": ["warn", { "maximum": { "single": 2, "multi": 1 } }],
    "@stylistic/jsx-first-prop-new-line": ["warn", "multiline"],
    "@stylistic/jsx-closing-bracket-location": "warn",
    "@stylistic/jsx-quotes": ["error", "prefer-double"],
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/jsx-self-closing-comp": ["error", {
      "component": true,
      "html": true,
    }],
    "@stylistic/comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "never",
    }],
  },
};

module.exports = config;
