const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  core: { builder: "webpack5" },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }], require.resolve("@emotion/babel-preset-css-prop")],
      },
    });
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      }),
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@emotion/core": toPath("node_modules/@emotion/react"),
      "@emotion/styled": toPath("node_modules/@emotion/styled"),
      "emotion-theming": toPath("node_modules/@emotion/react"),
    };
    return config;
  },
};
