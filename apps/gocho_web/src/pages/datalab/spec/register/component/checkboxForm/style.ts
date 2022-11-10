import { css, SerializedStyles } from "@emotion/react";

import { PC_HOVER } from "shared-style/mediaQuery";
import { COLORS } from "shared-style/color";

export const radioContainer = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

interface radioDisplayDef {
  (isClick: boolean, backgroundStyle: string): SerializedStyles;
}

export const radioDisplay: radioDisplayDef = (isClick, backgroundStyle) => {
  return css`
    width: fit-content;
    min-width: 7.5rem;
    height: 3rem;
    padding: 0 2rem;
    box-sizing: border-box;
    font-size: 0.875rem;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5rem 0.5rem;
    cursor: pointer;
    color: ${isClick ? COLORS.GRAY10 : COLORS.GRAY60};
    border: 1px solid ${isClick ? COLORS.GRAY10 : COLORS.GRAY70};
    ${backgroundStyle === "blue01" &&
    `
    background-color: ${isClick ? COLORS.BLUE_SECOND30 : COLORS.GRAY100};    
    `}
    ${backgroundStyle === "blue02" &&
    `
    background-color: ${isClick ? COLORS.BLUE_SECOND70 : COLORS.GRAY100};    
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

export const moreButton = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY40};
  display: flex;
  margin: 1rem auto;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.GRAY70};
  border-radius: 2rem;
  background-color: ${COLORS.GRAY100};
  width: 5.5rem;
  height: 1.5rem;
  position: relative;
  transition: all 0.2s ease;

  ${PC_HOVER} {
    :hover {
      background-color: ${COLORS.BLUE_FIRST40};
      color: ${COLORS.GRAY100};
      border-color: ${COLORS.BLUE_FIRST40};

      ::after {
        background-color: ${COLORS.BLUE_FIRST40};
      }
      ::before {
        background-color: ${COLORS.BLUE_FIRST40};
      }
    }
  }

  ::after {
    content: "";
    position: absolute;
    left: -300%;
    top: 50%;
    transform: translate(0, -50%);
    width: 300%;
    height: 1px;
    background-color: ${COLORS.GRAY70};
  }

  ::before {
    content: "";
    position: absolute;
    right: -300%;
    top: 50%;
    transform: translate(0, -50%);
    width: 300%;
    height: 1px;
    background-color: ${COLORS.GRAY70};
  }
`;

export const hide = css`
  margin: 0;
`;
