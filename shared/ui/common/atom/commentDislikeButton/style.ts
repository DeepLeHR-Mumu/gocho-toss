import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";

interface ButtonCSSDef {
  (isDisLiked: boolean): SerializedStyles;
}

export const buttonCSS: ButtonCSSDef = (isDisLiked) => css`
  white-space: nowrap;
  border-radius: 1rem;
  background-color: ${isDisLiked ? COLORS.GRAY30 : COLORS.GRAY100};
  color: ${isDisLiked ? COLORS.GRAY100 : COLORS.GRAY60};
  border: 1px solid ${COLORS.GRAY80};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5rem;
  font-weight: 400;
  width: fit-content;
  height: 1.25rem;
  padding: 0 0.5rem;

  ${MOBILE} {
    height: 1.5rem;
    padding: 0 1rem;
    font-size: 12px;
  }
`;
