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
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "@stylistic/jsx-quotes": ["error", "prefer-double"],
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "never",
    }],
    "@stylistic/jsx-self-closing-comp": ["error", {
      "component": true,
      "html": true,
    }],
  },
};

module.exports = config;
