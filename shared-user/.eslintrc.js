module.exports = {
  parserOptions: { tsconfigRootDir: __dirname, root: true },
  extends: ["deeple"],
  rules: {
    "import/no-unresolved": "off",
    "arrow-body-style": ["error", "as-needed"],
    "import/no-extraneous-dependencies": [
      "error",
      { depnedencies: false, evDependencies: false, optionalDependencies: false, peerDependencies: false },
    ],
  },
};
