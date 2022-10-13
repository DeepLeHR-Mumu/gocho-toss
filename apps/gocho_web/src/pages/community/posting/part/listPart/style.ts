import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";
import { hoverShadow } from "shared-style/common";

export const partContainer = css`
  background-color: ${COLORS.GRAY90};
  padding: 4.125rem 0;
  border-radius: 2rem 2rem 0 0;
`;

export const title = css`
  font-size: 2rem;
  font-weight: 700;
  color: ${COLORS.GRAY10};
  margin-bottom: 3.5rem;
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
  color: ${COLORS.GRAY40};
  margin-bottom: 0.5rem;
`;

export const setPostingFilterButton = (active = false) => {
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

    ${PC_HOVER} {
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 2px 0 #00000040;

        &:nth-of-type(1) {
          color: #3171b7;
        }

        &:nth-of-type(2) {
          color: #09a434;
        }

        &:nth-of-type(3) {
          color: #5429cd;
        }

        &:nth-of-type(4) {
          color: ${COLORS.GRAY20};
        }

        &:nth-of-type(5) {
          color: #f06500;
        }
      }
    }

    &:nth-of-type(1) {
      border-color: ${active ? COLORS.BLUE_SECOND40 : `${COLORS.GRAY100}`};
      color: ${active ? "#3171b7" : `${COLORS.GRAY30}`};
      background-color: ${active ? COLORS.BLUE_SECOND40 : `${COLORS.GRAY100}`};
    }

    &:nth-of-type(2) {
      border-color: ${active ? "#EDFFE3" : `${COLORS.GRAY100}`};
      color: ${active ? "#09A434" : `${COLORS.GRAY30}`};
      background-color: ${active ? "#EDFFE3" : `${COLORS.GRAY100}`};
    }

    &:nth-of-type(3) {
      border-color: ${active ? "#EBE3FF" : `${COLORS.GRAY100}`};
      color: ${active ? "#5429CD" : `${COLORS.GRAY30}`};
      background-color: ${active ? "#EBE3FF" : `${COLORS.GRAY100}`};
    }

    &:nth-of-type(4) {
      border-color: ${active ? COLORS.GRAY70 : `${COLORS.GRAY100}`};
      color: ${active ? `${COLORS.GRAY20}` : `${COLORS.GRAY30}`};
      background-color: ${active ? COLORS.GRAY70 : `${COLORS.GRAY100}`};
    }

    &:nth-of-type(5) {
      border-color: ${active ? "#FFF4DC" : COLORS.GRAY100};
      color: ${active ? "#F06500" : COLORS.GRAY30};
      background-color: ${active ? "#FFF4DC" : `${COLORS.GRAY100}`};
    }

    &:first-of-type {
      margin-top: 1rem;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  `;
};

export const listContainer = css`
  width: calc(100% - 10rem);
`;

export const tempContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const formCSS = css`
  width: 100%;
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

export const setPostingHashtagButton = (active = false) => {
  return css`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    font-weight: 400;
    margin-left: 0.5rem;
    padding: 0 1rem;
    transition: all 0.2s ease;
    white-space: nowrap;
    height: 2.5rem;
    color: ${COLORS.GRAY10};

    &:nth-of-type(1) {
      ${active
        ? css`
            border: 1px solid rgba(43, 43, 43, 0.5);
            background-color: #7fc061;
          `
        : css`
            border: 1px solid #cbc3df;
            background-color: #b2cca5;
          `}
      ${PC_HOVER} {
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 2px 2px 0 #00000040;
          background-color: #deffcf;
        }
      }
    }

    &:nth-of-type(2) {
      ${active
        ? css`
            border: 1px solid rgba(43, 43, 43, 0.5);
            background-color: #ffabf7;
          `
        : css`
            border: 1px solid #cbc3df;
            background-color: #e5cee3;
          `}
      ${PC_HOVER} {
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 2px 2px 0 #00000040;
          background-color: #ffe3fc;
        }
      }
    }

    &:nth-of-type(3) {
      border-color: ${active ? "#ffe3fc" : "#dfc3dc"};
      background-color: ${active ? "#ffe3fc" : "#dfc3dc"};
    }

    &:last-of-type {
      margin-right: 0;
    }
  `;
};

export const writePostingButton = css`
  width: 5.5rem;
  height: 5.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  font-weight: 500;
  background-color: ${COLORS.BLUE_FIRST40};
  transition: all 0.2s ease;
  color: ${COLORS.GRAY100};
  flex-direction: column;
  ${hoverShadow};
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
`;
