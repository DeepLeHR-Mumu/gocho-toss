import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const partContainer = css`
  margin-top: 7.9375rem;
`;

export const headerContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

export const title = css`
  font-size: 1.25rem;
  color: ${COLORS.GRAY10};
  font-weight: 600;
`;

export const buttonArrContainer = css`
  display: flex;
  flex-wrap: wrap;
`;

export const setPostingOrderButton = (active = false) => {
  return css`
    width: fit-content;
    text-align: center;
    border-radius: 1rem;
    font-weight: ${active ? "600" : "400"};
    margin-right: 0.5rem;
    padding: 0.25rem 1rem;
    border: 1px solid;
    transition: all 0.2s ease;

    :nth-of-type(1) {
      border-color: ${active ? COLORS.BLUE_SECOND40 : `${COLORS.GRAY70}`};
      color: ${active ? "#3171b7" : `${COLORS.GRAY30}`};
      background-color: ${active ? COLORS.BLUE_SECOND40 : "transparent"};
    }
    :nth-of-type(2) {
      border-color: ${active ? "#ebe3ff" : `${COLORS.GRAY70}`};
      color: ${active ? "#5429cd" : `${COLORS.GRAY30}`};
      background-color: ${active ? "#ebe3ff" : "transparent"};
    }
    :nth-of-type(3) {
      border-color: ${active ? "#edffe3" : `${COLORS.GRAY70}`};
      color: ${active ? "#3f7222" : `${COLORS.GRAY30}`};
      background-color: ${active ? "#edffe3" : "transparent"};
    }
    :nth-of-type(4) {
      border-color: ${active ? COLORS.GRAY90 : `${COLORS.GRAY70}`};
      color: ${active ? `${COLORS.GRAY10}` : `${COLORS.GRAY30}`};
      background-color: ${active ? COLORS.GRAY90 : "transparent"};
    }
    :nth-of-type(5) {
      border-color: ${active ? "#fff8f8" : COLORS.GRAY70};
      color: ${active ? COLORS.ERROR_RED40 : COLORS.GRAY30};
      background-color: ${active ? "#fff8f8" : "transparent"};
    }

    :last-of-type {
      margin-right: 0;
    }
  `;
};

export const cardListContainer = css`
  position: relative;
`;

export const sliderListContainer = css`
  > div {
    padding-bottom: 30px;
  }
`;

interface buttonCSSDef {
  (location: "left" | "right"): SerializedStyles;
}

export const buttonCSSCreator: buttonCSSDef = (location) => {
  return css`
    width: 4.125rem;
    height: 4.125rem;
    border-radius: 50%;
    background-color: ${COLORS.GRAY100};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.GRAY70};
    border: 1px solid ${COLORS.GRAY70};
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translate(0, -50%);
    transition: all 0.2s ease-in;
    ${location === "left" ? "left:-2rem" : "right:0rem"};

    ${PC_HOVER} {
      :hover {
        color: ${COLORS.GRAY100};
        background-color: ${COLORS.GRAY10};
        border: 0;
      }
    }
  `;
};

export const showMoreCommunityPostingButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 29.25rem;
  font-size: 0.9375rem;
  border-radius: 2rem;
  margin: 2.5rem auto 0;
  padding: 1rem;
  background-color: ${COLORS.GRAY20};
  color: ${COLORS.GRAY100};

  > span {
    padding-left: 5px;
    color: ${COLORS.GRAY100};
    opacity: 0.4;
    display: flex;
    align-items: center;
  }
`;
