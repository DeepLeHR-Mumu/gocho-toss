import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const partContainer = css`
  margin-top: 10rem;
`;

export const title = css`
  font-size: 1.25rem;
  color: ${COLORS.GRAY10};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
`;

export const buttonArrContainer = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

export const setPostingOrderButton = (active = false) => {
  return css`
    text-align: center;
    border-radius: 1rem;
    font-weight: ${active ? "600" : "400"};
    margin-right: 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 2.0625rem;
    transition: all 0.2s ease;

    :nth-of-type(1) {
      color: ${active ? COLORS.BLUE_FIRST30 : `${COLORS.GRAY40}`};
      background-color: ${active ? "#E9EFFA" : COLORS.GRAY90};
    }
    :nth-of-type(2) {
      color: ${active ? "#5429cd" : `${COLORS.GRAY40}`};
      background-color: ${active ? "#ebe3ff" : COLORS.GRAY90};
    }
    :nth-of-type(3) {
      color: ${active ? "#09A434" : `${COLORS.GRAY40}`};
      background-color: ${active ? "#edffe3" : COLORS.GRAY90};
    }
    :nth-of-type(4) {
      color: ${active ? `${COLORS.GRAY10}` : `${COLORS.GRAY40}`};
      background-color: ${active ? COLORS.GRAY90 : COLORS.GRAY90};
    }
    :nth-of-type(5) {
      color: ${active ? "#F16E0E" : COLORS.GRAY40};
      background-color: ${active ? "#FFF4DC" : COLORS.GRAY90};
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
    padding-bottom: 1.75rem;
  }
`;

export const buttonBox = css`
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${COLORS.GRAY100};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :after {
    content: "";
    width: 8rem;
    position: absolute;
    left: -8rem;
    top: 0;
    height: 100%;
    background-image: linear-gradient(to left, #fff 50%, transparent);
  }

  > button {
    margin-bottom: 1rem;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const buttonCSSCreator = css`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  opacity: 0.8;
  background-color: ${COLORS.GRAY100};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.GRAY40};
  border: 1px solid ${COLORS.GRAY70};
  transition: all 0.2s ease-in;

  ${PC_HOVER} {
    :hover {
      color: ${COLORS.GRAY100};
      background-color: ${COLORS.GRAY10};
      border: 0;
    }
  }
`;

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

export const linkButtonBox = css`
  width: 100%;
  margin: 1.5rem auto 0;
  max-width: 25.5rem;
`;
