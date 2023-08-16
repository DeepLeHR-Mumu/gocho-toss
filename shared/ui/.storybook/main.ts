import type { StorybookConfig } from "@storybook/nextjs";
// import path from "path";
// import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

// const toPath = (_path) => path.join(process.cwd(), _path);

const config: StorybookConfig = {
  framework: "@storybook/nextjs",
  stories: ["../deeple-ds/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  docs: { autodocs: true },
  webpackFinal: (config) => {
    config.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          [
            "react-app",
            {
              flow: false,
              typescript: true,
            },
          ],
          require.resolve("@emotion/babel-preset-css-prop"),
        ],
      },
    });

    return config;
  },
  // async webpackFinal(config, { configType }) {
  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     loader: require.resolve("babel-loader"),
  //     options: {
  //       presets: [
  //         [
  //           "react-app",
  //           {
  //             flow: false,
  //             typescript: true,
  //           },
  //         ],
  //         require.resolve("@emotion/babel-preset-css-prop"),
  //       ],
  //     },
  //   });
  //   config.resolve.plugins = [
  //     new TsconfigPathsPlugin({
  //       configFile: path.resolve(__dirname, "../tsconfig.json"),
  //     }),
  //   ];
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     "@emotion/core": toPath("node_modules/@emotion/react"),
  //     "@emotion/styled": toPath("node_modules/@emotion/styled"),
  //     "emotion-theming": toPath("node_modules/@emotion/react"),
  //   };
  //   return config;
  // },
};

export default config;
