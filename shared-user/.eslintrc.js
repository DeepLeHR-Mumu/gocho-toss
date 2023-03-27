module.exports = {
  parserOptions: { tsconfigRootDir: __dirname, root: true },
  extends: ["deeple"],
  rules: {
    "import/no-unresolved": "off",
    "arrow-body-style": ["error", "as-needed"],
    "import/no-extraneous-dependencies": [
      "error",
      { dependencies: false, devDependencies: false, optionalDependencies: false, peerDependencies: false },
    ],
  },
};
