import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";
import { hoverShadow } from "@style/common";

export const partContainer = css`
  background-color: ${COLORS.GRAY90};
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

export const setPostingFilterButton = (active = false) => {
  return css`
    width: 6rem;
    text-align: center;
    border-radius: 1.5rem;
    font-weight: 500;
    margin-top: 0.5rem;
    padding: 0.5rem 2rem;
    transition: all 0.2s ease;
    word-break: keep-all;

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
  flex-grow: 1;
`;

export const tempContainer = css`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const formCSS = css`
  flex-grow: 1;
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
  transform: translate(0, -50%);
  color: ${COLORS.GRAY40};
  width: 1.25rem;
`;

export const setPostingHashtagButton = (active = false) => {
  return css`
    text-align: center;
    border-radius: 1.5rem;
    font-weight: 400;
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease;
    word-break: keep-all;
    color: ${COLORS.GRAY10};

    &:nth-of-type(1) {
      background-color: #ebe3ff;
    }

    &:nth-of-type(2) {
      background-color: #deffcf;
    }

    &:nth-of-type(3) {
      background-color: #ffe3fc;
    }

    ${PC_HOVER} {
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 2px 0 #00000040;
      }
    }

    &:nth-of-type(1) {
      border-color: ${active ? "#ebe3ff" : "#cbc3df"};
      background-color: ${active ? "#ebe3ff" : "#cbc3df"};
    }

    &:nth-of-type(2) {
      border-color: ${active ? "#deffcf" : "#bedfaf"};
      background-color: ${active ? "#deffcf" : "#bedfaf"};
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
  width: 6rem;
  text-align: center;
  border-radius: 1.5rem;
  margin-top: 0.5rem;
  padding: 1.25rem 1rem;
  word-break: keep-all;
  font-weight: 400;
  background-color: ${COLORS.BLUE_FIRST40};
  transition: all 0.2s ease;
  color: ${COLORS.GRAY100};
  flex-direction: column;

  ${hoverShadow};
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
`;
