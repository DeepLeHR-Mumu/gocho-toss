import { Global } from "@emotion/react";

import { globalStyle } from "../globalStyle";

export const decorators = [
  (Story) => (
    <>
      <Global styles={globalStyle} />
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
      iPhone14: {
        name: "iPhone 14",
        styles: { width: "390px", height: "844px" },
      },
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
