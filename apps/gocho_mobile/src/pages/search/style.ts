import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const mainContainer = css`
  padding: 0 0 2rem;
  background-color: ${COLORS.GRAY90};
`;

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
    padding: 0.5rem;
    font-weight: 700;
    color: ${isActive ? COLORS.GRAY10 : COLORS.GRAY40};
    border-bottom: ${isActive ? "2px solid black" : "none"};
  `;
};

export const title = css`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 3rem;
`;

export const buttonBox = css`
  display: flex;
  justify-content: center;
`;
