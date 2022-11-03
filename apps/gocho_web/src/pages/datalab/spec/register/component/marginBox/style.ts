import { css, SerializedStyles } from "@emotion/react";

interface MarginBoxDef {
  (optionObj: { marginLocation: "top" | "bottom"; marginValue: number; maxWidth?: number }): SerializedStyles;
}

export const marginBoxCSS: MarginBoxDef = ({ marginLocation, marginValue, maxWidth }) => {
  return css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${maxWidth &&
    `
      max-width: ${maxWidth}rem;
      `}
    ${marginLocation === "top" &&
    `
      margin-top: ${marginValue}rem;  
    `}
      ${marginLocation === "bottom" &&
    `
      margin-bottom: ${marginValue}rem;  
    `}
  `;
};
