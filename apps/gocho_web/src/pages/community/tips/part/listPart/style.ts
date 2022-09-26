import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const partContainer = css`
  background-color: ${COLORS.BLUE_SECOND40};
  padding: 7.5rem 0 3rem 0;
  border-radius: 2rem 2rem 0 0;
`;

export const title = css`
  font-size: 2rem;
  margin-bottom: 3.5rem;
  font-weight: 700;
  color: ${COLORS.BLUE_FIRST40};
`;

export const mainContainer = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const buttonArrContainer = css`
  width: 5.5rem;
  position: sticky;
  left: 0;
  top: 10rem;
  margin-top: 3.5rem;
`;

export const buttonTitle = css`
  font-weight: 500;
  font-size: 1rem;
  color: ${COLORS.GRAY30};
  margin-bottom: 0.5rem;
`;

export const listContainer = css`
  width: 100%;
  max-width: 58.9375rem;
`;

export const formCSS = css`
  width: 100%;
  margin-bottom: 1rem;
`;

export const searchWrapper = css`
  width: 100%;
  position: relative;
`;

export const searchBox = css`
  width: 100%;
  height: 2.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  display: flex;
  align-items: flex-start;
  padding: 0 2rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY100};
`;

export const searchButton = css`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translate(0, -50%);
  color: ${COLORS.GRAY40};
  width: 1.25rem;
`;

export const setTipsFilterButton = (active = false) => {
  return css`
    width: 5.5rem;
    height: 2.5rem;
    text-align: center;
    border-radius: 1.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
    border-color: ${active ? "#E9EFFA" : `${COLORS.GRAY70}`};
    color: ${active ? `${COLORS.BLUE_FIRST30}` : `${COLORS.GRAY30}`};
    background-color: ${active ? "#E9EFFA" : `${COLORS.GRAY100}`};

    ${PC_HOVER} {
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 2px 0 #00000040;
        color: ${COLORS.BLUE_FIRST30};

        &:last-of-type {
          color: ${COLORS.GRAY10};
        }
      }
    }

    &:first-of-type {
      margin-top: 1rem;
    }
  `;
};

export const weightPoint = css`
  font-weight: 400;
`;
