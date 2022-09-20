import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "shared-style/color";

interface wrapperCreatorDef {
  (isClick: boolean): SerializedStyles;
}

export const wrapperCreator: wrapperCreatorDef = (isClick) => {
  return css`
    width: fit-content;
    height: 3rem;
    padding: 0 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${isClick ? COLORS.BLUE_SECOND40 : COLORS.GRAY70};
    border-radius: 2rem;
    min-width: 12.5rem;
    position: relative;
    transition: all 0.2s ease-in;
  `;
};

interface toggleContainerCreatorDef {
  (isClick: boolean): SerializedStyles;
}

export const toggleContainerCreator: toggleContainerCreatorDef = (isClick) => {
  return css`
    transition: all 0.2s ease-in;
    position: absolute;
    width: 80%;
    background-color: ${COLORS.GRAY100};
    top: 50%;
    font-weight: 400;
    height: calc(100% - 4px);
    border-radius: 2rem;
    transform: translate(0, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${isClick ? COLORS.BLUE_FIRST40 : COLORS.GRAY40};
    font-size: 1rem;
    ${isClick ? "right:2px" : "left:2px"}
  `;
};
