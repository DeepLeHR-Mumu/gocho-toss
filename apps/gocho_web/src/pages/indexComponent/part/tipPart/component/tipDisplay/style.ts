import { css, SerializedStyles } from "@emotion/react";
import { PC_HOVER, TABLET } from "shared-style/mediaQuery";
import { shorten } from "shared-style/shorten";
import { COLORS } from "shared-style/color";

export const tipDisplayWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const tipFadeContainer = css`
  position: relative;
  width: 100%;
  max-width: 35rem;

  ${TABLET} {
    max-width: 50%;
  }
`;

interface buttonCSSDef {
  (location: "left" | "right", length: number, activeNumber: number): SerializedStyles;
}

export const buttonCSSCreator: buttonCSSDef = (location, length, activeNumber) => {
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
    ${location === "left" ? "left:-2rem" : "right:-2rem"};
    ${length === activeNumber && "display:none"};

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
  overflow: hidden;
  border-radius: 20rem;
`;

export const fadeImageCSS = css`
  height: 18rem;
  background-color: ${COLORS.GRAY90};
  font-size: 2rem;
  position: relative;

  ${TABLET} {
    height: 15rem;
  }
`;

export const currentTipContainer = css`
  width: 100%;
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const tagArrCSS = css`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  > li {
    font-size: 1.125rem;
    color: ${COLORS.GRAY30};
    margin-right: 1rem;
    white-space: nowrap;

    :last-of-type {
      margin-right: 0;
    }
  }
`;

export const currentTipTitle = css`
  font-size: 1.75rem;
  font-weight: 600;
  word-break: keep-all;
  color: ${COLORS.GRAY20};
  line-height: 1.5;
  margin-bottom: 1.8125rem;

  > span {
    display: block;
  }
`;

export const currentTipDesc = css`
  font-size: 1rem;
  color: ${COLORS.GRAY20};
  line-height: 1.6;
  width: 100%;
  margin-bottom: 1rem;
  ${shorten(2)}
`;
