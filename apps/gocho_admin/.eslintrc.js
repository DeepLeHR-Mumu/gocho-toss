module.exports = {
  parserOptions: { tsconfigRootDir: __dirname, root: true },
  extends: ["deeple"],
  rules: { "import/no-unresolved": "off", "no-alert": "off" },
  "import/no-extraneous-dependencies": [
    "error",
    { depnedencies: false, evDependencies: false, optionalDependencies: false, peerDependencies: false },
  ],
};
