import { Global } from "@emotion/react";
import { initialize, mswDecorator } from "msw-storybook-addon";

import { globalStyles } from "../src/style/globalStyle";

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
      SmallDesktop: {
        name: "Small Desktop",
        styles: { width: "800px", height: "1000px" },
      },
      LargeDesktop: {
        name: "Large Desktop",
        styles: { width: "1200px", height: "1000px" },
      },
    },
  },
};
