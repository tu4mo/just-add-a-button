module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  plugins: ["stylelint-order"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind"],
      },
    ],
    "order/order": ["custom-properties", "declarations"],
    "order/properties-alphabetical-order": true,
  },
  ignoreFiles: "**/*.tsx",
};
