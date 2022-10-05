import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const asideContainer = css`
  padding: 1.5rem;
  background-color: ${COLORS.BLUE_NEON50};
`;

export const linkContainer = (isActiveMenu: boolean) => {
  return css`
    margin: 1rem 0;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    color: ${isActiveMenu ? `${COLORS.GRAY10}` : `${COLORS.GRAY90}`};
    background-color: ${isActiveMenu ? `${COLORS.GRAY100}` : "transparent"};

    :first-of-type {
      margin-top: 0;
    }

    :last-of-type {
      margin-bottom: 0;
    }
  `;
};

export const buttonBox = (isActiveMenu: boolean) => {
  return css`
    width: 100%;
    justify-content: flex-start;
    font-weight: ${isActiveMenu ? "700" : "400"};
  `;
};
