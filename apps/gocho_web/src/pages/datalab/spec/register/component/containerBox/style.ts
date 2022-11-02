import { css, SerializedStyles } from "@emotion/react";

interface ContainerBoxDef {
  (optionObj: { location: "top" | "bottom"; marginValue: number; maxWidth?: number }): SerializedStyles;
}

export const containerBoxCSS: ContainerBoxDef = ({ location, marginValue, maxWidth }) => {
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
    ${location === "top" &&
    `
      margin-top: ${marginValue}rem;  
    `}
      ${location === "bottom" &&
    `
      margin-bottom: ${marginValue}rem;  
    `}
  `;
};
