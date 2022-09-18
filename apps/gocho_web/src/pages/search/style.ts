import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const mainContainer = css`
  padding: 5rem 0;
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
    padding: 1rem;
    font-weight: 700;
    color: ${isActive ? COLORS.GRAY10 : COLORS.GRAY40};
    background-color: ${isActive ? COLORS.BLUE_SECOND30 : COLORS.GRAY100};
    border-bottom: ${isActive ? "3px solid black" : "none"};
  `;
};

export const title = css`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 3rem;
`;

export const moreButton = css`
  width: 50%;
  border: 1px solid ${COLORS.BLUE_FIRST40};
  border-radius: 1.5rem;
  color: ${COLORS.BLUE_FIRST40};
  padding: 0.5rem 0;
  margin: 0 auto;
`;
