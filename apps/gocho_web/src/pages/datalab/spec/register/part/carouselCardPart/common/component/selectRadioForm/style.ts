import { css, SerializedStyles } from "@emotion/react";

import { PC_HOVER } from "@style/mediaQuery";
import { COLORS } from "@style/constant";

export const container = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

interface descDef {
  (isClick: boolean, backgroundStyle: string): SerializedStyles;
}

export const desc: descDef = (isClick, backgroundStyle) => {
  return css`
    width: fit-content;
    min-width: 7.5rem;
    height: 3rem;
    padding: 0 2rem;
    box-sizing: border-box;
    font-size: 0.875rem;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5rem 0.5rem;
    color: ${isClick ? COLORS.GRAY10 : COLORS.GRAY60};
    border: 1px solid ${isClick ? COLORS.GRAY10 : COLORS.GRAY70};
    ${backgroundStyle === "blue01" &&
    `
    background-color: ${isClick ? COLORS.BLUE_SECOND70 : COLORS.GRAY100};    
    `}
    ${backgroundStyle === "blue02" &&
    `
    background-color: ${isClick ? COLORS.BLUE_SECOND30 : COLORS.GRAY100};    
    `}
    border-radius: 2rem;
    transition: all 0.2s ease;

    ${PC_HOVER} {
      :hover {
        color: ${COLORS.GRAY10};
        box-shadow: ${isClick ? "none" : "0 5px 10px rgba(0, 0, 0, 0.2)"};
      }
    }
  `;
};
