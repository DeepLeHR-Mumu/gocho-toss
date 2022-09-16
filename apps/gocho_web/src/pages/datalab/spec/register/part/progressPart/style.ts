import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const progressCSS = css`
  height: 6px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

interface activeLineDef {
  (percent: number): SerializedStyles;
}

export const activeLine: activeLineDef = (percent) => {
  return css`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${percent}%;
    background-color: ${COLORS.BLUE_SECOND70};
    transition: all 1s ease-out;
  `;
};
