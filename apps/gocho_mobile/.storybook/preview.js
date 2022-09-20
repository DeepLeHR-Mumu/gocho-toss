import { Global } from "@emotion/react";
import { initialize, mswDecorator } from "msw-storybook-addon";

import { globalStyles } from "../src/style/globalStyles";

initialize();

export const decorators = [
  mswDecorator,
  (Story) => (
    <>
      <Global styles={globalStyles} />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      MinimumMobile: {
        name: "Minimum Mobile",
        styles: { width: "360px", height: "1000px" },
      },
      MaxMobile: {
        name: "Max Mobile",
        styles: { width: "764px", height: "1000px" },
      },
    },
    defaultViewport: "MinimumMobile",
  },
};
