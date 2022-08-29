import { css, SerializedStyles } from "@emotion/react";

interface VariableSizeDef {
  (sizeStr: "S" | "M" | "L"): SerializedStyles;
}
const sizeConverter: VariableSizeDef = (sizeStr) => {
  if (sizeStr === "S")
    return css`
      font-size: 1rem;
      width: 6rem;
      display: flex;
      justify-content: space-around;
    `;
  if (sizeStr === "M")
    return css`
      font-size: 2rem;
      width: 12rem;
      display: flex;
      justify-content: space-around;
    `;
  return css`
    font-size: 3rem;
    width: 18rem;
    display: flex;
    justify-content: space-around;
  `;
};

interface Typename {
  (sizeStr: "S" | "M" | "L", multiply?: number): SerializedStyles;
}

export const container = css`
  display: flex;
  flex-direction: column;
  position: relative;
  width: fit-content;
`;

export const hoverLayer = css`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-direction: row;
  > button {
    flex-grow: 1;
    height: 100%;
    z-index: 30;
  }
`;

export const starLayer: Typename = (sizeStr) => {
  return css`
    width: fit-content;
    display: flex;
    justify-content: space-around;
    ${sizeConverter(sizeStr)}
    color: #FFC84B;
  `;
};
