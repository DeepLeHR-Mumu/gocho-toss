module.exports = {
  parserOptions: { tsconfigRootDir: __dirname, root: true },
  extends: ["deeple"],
  rules: { "import/no-unresolved": "off", "import/no-extraneous-dependencies": "off" },
  ignorePatterns: ["jest.config.js"],
};
