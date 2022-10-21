import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const menuList = css`
  display: flex;
  width: 100%;
  background-color: ${COLORS.GRAY100};
`;

export const menuElement = css`
  width: 33.3%;
`;

export const menuButton = (isActive = false) => {
  return css`
    width: 100%;
    text-align: center;
    padding: 1rem;
    font-weight: 700;
    color: ${isActive ? COLORS.GRAY10 : COLORS.GRAY40};
    background-color: ${isActive ? COLORS.BLUE_SECOND30 : COLORS.GRAY100};
    border-bottom: ${isActive ? "3px solid black" : "none"};
  `;
};
