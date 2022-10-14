import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const container = css`
  margin-bottom: 5rem;
`;

export const headerBox = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid #e9e9e9;
`;

export const sliderBox = css`
  width: calc(100% - 6rem);
`;

export const iconBox = css`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.GRAY40};
  font-size: 1.25rem;
`;

export const menuList = css`
  display: flex;
  font-size: 1rem;
  border-top: 1px solid #e9e9e9;
  height: 2.875rem;
`;

export const menu = (isActivated: boolean) => {
  return css`
    padding: 0.25rem;
    white-space: nowrap;
    color: ${isActivated ? COLORS.BLUE_NEON50 : COLORS.GRAY40};
    font-weight: 700;
    font-size: 0.875rem;
    height: 3rem;
    ${isActivated &&
    css`
      border-bottom: 3px solid ${COLORS.BLUE_NEON50};
    `};
  `;
};

export const informationWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.BLUE_SECOND90};
  padding: 2rem;
  margin-bottom: 3rem;
`;

export const infoBox = css`
  width: 100%;
  background-color: ${COLORS.GRAY100};
  padding: 1rem;
  border-radius: 1.5rem 0 1.5rem 1.5rem;
  > li {
    line-height: 2;
    font-size: 0.875rem;
    margin-left: 1rem;
    font-weight: 400;
    word-break: keep-all;
    color: ${COLORS.GRAY10};
    list-style: disc;
  }
`;
