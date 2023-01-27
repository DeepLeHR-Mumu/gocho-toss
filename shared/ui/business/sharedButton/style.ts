import { css } from "@emotion/react";
import { RadiusType } from "./type";

export const cssObj = {
  wrapper: (radius: RadiusType, backgroundColor: string, borderColor?: string, isFullWidth?: boolean) => {
    let radiusValue;
    if (radius === "rect") radiusValue = 0;
    if (radius === "round") radiusValue = 0.4;
    if (radius === "circle") radiusValue = 50;

    return css`
      border-radius: ${radiusValue}rem;
      background-color: ${backgroundColor};
      overflow: hidden;
      ${borderColor &&
      css`
        border: 1px solid ${borderColor};
      `}
      ${isFullWidth &&
      css`
        width: 100%;
      `}
      :hover {
        > div {
          background-color: rgba(0, 0, 0, 0.15);
        }
      }
      :active {
        > div {
          background-color: rgba(0, 0, 0, 0.35);
        }
      }
    `;
  },

  container: (heightPadding: number) => css`
    padding: ${heightPadding}rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    p {
      line-height: 1;
    }
  `,

  icon: (fontColor?: string, iconLocation?: "left" | "right") => css`
    font-size: 1rem;
    display: flex;
    justify-content: center;
    color: ${fontColor};
    ${iconLocation === "left" &&
    css`
      margin-right: 0.5rem;
    `}
    ${iconLocation === "right" &&
    css`
      margin-left: 0.5rem;
    `}
  `,
  text: (fontweight: number, color: string, size: number) => css`
    font-weight: ${fontweight};
    color: ${color};
    font-size: ${size}rem;
  `,
};
