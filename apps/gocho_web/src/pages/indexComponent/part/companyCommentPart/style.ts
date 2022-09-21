import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";

export const partContainer = css`
  margin-top: 5.5rem;
  padding-top: 5.5rem;
  background-color: ${COLORS.GRAY90};
`;

export const title = css`
  color: ${COLORS.GRAY10};
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 6rem;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_NEON30};
`;

export const cardListContainer = css`
  position: relative;
  overflow: hidden;
`;

export const emptyBox = css`
  min-height: 48.3125rem;
`;

export const sliderContainer = css`
  .slick-track {
    padding: 2rem 0 8rem 0;
  }
  .slick-slide {
    transition: all 0.2s ease;
    transform: scale(0.9);
  }
  .slick-center {
    transform: scale(1);
  }
`;

interface buttonCSSDef {
  (location: "left" | "right"): SerializedStyles;
}

export const buttonCSSCreator: buttonCSSDef = (location) => {
  return css`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: ${COLORS.GRAY100};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.GRAY40};
    position: absolute;
    top: 40%;
    z-index: 10;
    opacity: 0.7;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease-in;
    ${location === "left" ? "left:calc(50% - 15rem)" : "right:calc(50% - 19rem)"};

    ${PC_HOVER} {
      :hover {
        opacity: 1;
      }
    }
  `;
};
