import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

interface textFormBoxDef {
  (minWidth: "auto" | number, fullWidth: boolean, activeBorderStyle: "gray" | "blue"): SerializedStyles;
}

export const textFormBox: textFormBoxDef = (minWidth, fullWidth, activeBorderStyle) => {
  return css`
    ${activeBorderStyle === "gray" &&
    `
        border: 1px solid ${COLORS.GRAY70};
        background-color: ${COLORS.GRAY100};        

        :focus{
          border-color : ${COLORS.GRAY10};
          background-color:${COLORS.GRAY90};
        }
    `}
    ${activeBorderStyle === "blue" &&
    `
        border: 1px solid ${COLORS.GRAY70};
        background-color: ${COLORS.GRAY100};        

        :focus{
          border-color:${COLORS.BLUE_FIRST40};
        }
    `}
    font-size: 1rem;
    text-align: center;
    display: flex;
    padding: 0 2rem;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    white-space: nowrap;
    width: ${fullWidth ? "100%" : "fit-content"};
    height: 3rem;
    color: ${COLORS.GRAY30};
    min-width: ${minWidth === "auto" ? "auto" : `${minWidth}rem`};
    transition: all 0.5s ease;

    ::placeholder {
      text-align: center;
      font-size: 0.875rem;
      color: ${COLORS.GRAY60};
    }
  `;
};
