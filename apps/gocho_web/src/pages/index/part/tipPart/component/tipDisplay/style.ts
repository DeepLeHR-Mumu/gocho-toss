import { css, SerializedStyles } from "@emotion/react";

import { PC_HOVER, TABLET } from "shared-style/mediaQuery";
import { shorten } from "shared-style/common";
import { COLORS } from "shared-style/color";

export const tipDisplayWrapper = css`
  display: flex;
  align-items: center;
  position: relative;
`;

export const tipFadeContainer = css`
  margin-right: 1.5rem;
`;

interface buttonCSSDef {
  (location: "left" | "right", length: number, activeNumber: number): SerializedStyles;
}

export const buttonCSSCreator: buttonCSSDef = (location, length, activeNumber) => {
  return css`
    font-size: 1.25rem;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: ${COLORS.GRAY100};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.GRAY40};
    border: 1px solid ${COLORS.GRAY70};
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translate(0, -50%);
    transition: all 0.2s ease-in;
    ${location === "left" ? "left:-1rem" : "right:-1rem"};
    ${length === activeNumber && "display:none"};
    opacity: 0.8;

    ${PC_HOVER} {
      :hover {
        color: ${COLORS.GRAY100};
        background-color: ${COLORS.GRAY10};
        border: 0;
      }
    }
  `;
};

export const tipImageBox = css`
  width: 38.9375rem;
  height: 21.0625rem;
  border-radius: 20rem;
  overflow: hidden;
  position: relative;

  ${TABLET} {
    width: 30.25rem;
    height: 18rem;
  }
`;

export const currentTipContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const tagArrCSS = css`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;

  > li {
    font-size: 1rem;
    color: ${COLORS.GRAY40};
    margin-right: 1rem;
    font-weight: 400;
    white-space: nowrap;

    :last-of-type {
      margin-right: 0;
    }
  }
`;

export const currentTipTitle = css`
  font-size: 1.625rem;
  font-weight: 600;
  word-break: keep-all;
  color: ${COLORS.GRAY10};
  line-height: 1.6;
  margin-bottom: 2rem;
  ${shorten(2)}
`;

export const currentTipDesc = css`
  width: 90%;
  font-size: 0.875rem;
  color: ${COLORS.GRAY40};
  line-height: 1.6;
  margin-bottom: 2rem;
  ${shorten(3)}
`;
