module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./**/tsconfig.json",
    //"project": ["layers/*/tsconfig.json", "ecommerce/*/tsconfig.json", "purchase/*/tsconfig.json", "fulfillment/*/tsconfig.json"],
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/camelcase": [
      "error",
      { "properties": "never" }
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      { "allowExpressions": true }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { "argsIgnorePattern": "^_" }
    ],
    "@typescript-eslint/quotes": ["error"],
    "@typescript-eslint/semi": ["error"]
  }
};
