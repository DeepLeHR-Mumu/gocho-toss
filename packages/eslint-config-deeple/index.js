module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "next/core-web-vitals",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  plugins: ["import"],
  rules: {
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-props-no-spreading": "off",
    "react/no-unused-prop-types": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["arrow-function", "function-declaration"],
      },
    ],
    "react/jsx-filename-extension": ["warn", { extensions: [".ts", ".tsx"] }],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-key": "error",
    "import/extensions": ["off"],
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "import/no-unresolved": "error",
    "arrow-body-style": ["error", "always"],
    "no-console": "error",
    "@next/next/no-img-element": "error",
    camelcase: "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test.{ts,tsx}",
          "test-*.{ts,tsx}",
          "**/*{.,_}{test,spec}.{ts,tsx}",
          "**/jest.config.ts", // jest config
          "**/jest.setup.ts", // jest setup
        ],
        optionalDependencies: false,
      },
    ],
  },
  overrides: [
    {
      files: ["*.stories.tsx"],
      rules: {
        "storybook/prefer-pascal-case": "off",
        camelcase: "off",
      },
    },
  ],

  ignorePatterns: ["next.config.js"],
};
