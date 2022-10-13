import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const listContainer = css`
  position: relative;
  .slick-slide {
    transition: all 0.2s ease;
    transform: scale(0.9);
  }

  .slick-center {
    transform: scale(1);
  }

  .slick-slide > div {
    margin: 1rem 0rem;
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
    top: 50%;
    z-index: 10;
    border: 1px solid ${COLORS.GRAY60};
    transform: translate(0, -50%);
    transition: all 0.2s ease-in;
    ${location === "left" ? "left:1rem" : "right:1rem"};
  `;
};
