import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const asideContainer = css`
  min-width: 16.5rem;
  padding: 1.5rem;
  background-color: ${COLORS.BLUE_NEON50};
`;

export const linkContainer = css`
  width: 100%;
  margin: 1rem 0;
  padding: 0.5rem 0.75rem;
  color: ${COLORS.GRAY90};

  :first-of-type {
    margin-top: 0;
  }

  :last-of-type {
    margin-bottom: 0;
  }

  > strong {
    font-size: 1.5rem;
    padding-bottom: 0.125rem;
    margin-bottom: 0.5rem;
    border-bottom: 3px solid ${COLORS.GRAY10};
  }
`;

export const buttonBox = (isActiveMenu: boolean) => {
  return css`
    width: 100%;
    justify-content: flex-start;
    font-weight: ${isActiveMenu ? "700" : "400"};
    padding: ${isActiveMenu ? "0.25rem 0.75rem" : "0.25rem 0"};
    margin: 0.5rem 0;
    border-radius: 0.5rem;
    color: ${isActiveMenu ? `${COLORS.GRAY10}` : `${COLORS.GRAY90}`};
    background-color: ${isActiveMenu ? `${COLORS.GRAY100}` : "transparent"};

    :first-of-type {
      margin-top: 1.5rem;
    }
  `;
};
