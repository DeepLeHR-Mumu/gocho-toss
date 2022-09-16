import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const partContainer = css`
  background-color: ${COLORS.BLUE_SECOND70};
  padding: 3rem 0;
  border-radius: 2rem 2rem 0 0;
`;

export const title = css`
  font-size: 2rem;
  font-weight: 600;
  color: ${COLORS.GRAY10};
`;

export const mainContainer = css`
  display: flex;
  margin-top: 3rem;
`;

export const buttonArrContainer = css`
  margin-right: 2rem;
`;

export const listContainer = css`
  flex-grow: 1;
`;

export const formCSS = css`
  width: 100%;
`;

export const searchWrapper = css`
  width: 100%;
  position: relative;
  margin-top: 0.5rem;
`;

export const searchBox = css`
  width: 100%;
  height: 2.5rem;
  font-family: Noto Sans KR, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  padding: 0.5rem 3rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY100};
`;

export const searchButton = css`
  position: absolute;
  top: 50%;
  right: 1rem;
  width: 1.25rem;
  transform: translate(0, -50%);
  color: ${COLORS.GRAY40};
`;

export const setTipsFilterButton = (active = false) => {
  return css`
    width: 6rem;
    text-align: center;
    border-radius: 1.5rem;
    font-weight: 500;
    margin-top: 0.5rem;
    padding: 0.5rem;
    transition: all 0.2s ease;
    word-break: keep-all;
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

    &:last-of-type {
      border-color: ${active ? `${COLORS.GRAY90}` : `${COLORS.GRAY70}`};
      color: ${active ? `${COLORS.GRAY10}` : `${COLORS.GRAY30}`};
      background-color: ${active ? `${COLORS.GRAY90}` : `${COLORS.GRAY100}`};
    }
  `;
};

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
`;
