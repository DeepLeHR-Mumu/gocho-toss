import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

interface ButtonCSSDef {
  (isLiked: boolean): SerializedStyles;
}

export const buttonCSS: ButtonCSSDef = (isLiked) => {
  return css`
    white-space: nowrap;
    border-radius: 1rem;
    background-color: ${isLiked ? COLORS.BLUE_NEON40 : COLORS.GRAY100};
    color: ${isLiked ? COLORS.GRAY100 : COLORS.GRAY60};
    display: flex;
    border: 1px solid ${COLORS.GRAY80};
    align-items: center;
    justify-content: center;
    font-size: 0.5rem;
    font-weight: 400;
    width: fit-content;
    height: 1.25rem;
    padding: 0 0.5rem;
  `;
};
