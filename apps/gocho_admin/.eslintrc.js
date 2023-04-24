module.exports = {
  parserOptions: { tsconfigRootDir: __dirname, root: true },
  extends: ["deeple"],
  rules: {
    "import/no-unresolved": "off",
    "no-alert": "off",
    "arrow-body-style": ["error", "as-needed"],
    "import/no-extraneous-dependencies": "off",
  },
};
