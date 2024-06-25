const devRulesLevel = process.env.NODE_ENV === "production" ? "error" : "warn";

module.exports = {
  root: true,
  env: { node: true },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "prettier/prettier": "warn",
    "no-debugger": devRulesLevel,
    "no-console": devRulesLevel,
    "no-unused-vars": devRulesLevel,
    "linebreak-style": 0,
    "prettier/prettier": "off"
  },
};
