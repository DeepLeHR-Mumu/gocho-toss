import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  background-color: #f2f2f6;
  padding: 3rem 0;
`;

export const container = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const buttonCSS = (isActivated: boolean) => {
  return css`
    width: 48%;
    border-radius: 3rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.125rem;
    border: 2px solid ${isActivated ? COLORS.BLUE_FIRST40 : COLORS.GRAY60};
    color: ${isActivated ? COLORS.BLUE_FIRST40 : COLORS.GRAY40};
    font-weight: 500;
    background-color: ${isActivated ? COLORS.GRAY100 : "#E9EEF9"};
  `;
};
