import { css } from "@emotion/react";

export const cssObj = {
  container: () => css`
    display: flex;
    align-items: center;
    :hover {
      > span {
        text-decoration: underline;
      }
    }
  `,
  icon: (fontColor: string, iconLocation: "left" | "right") => css`
    ${iconLocation === "left"
      ? css`
          margin-right: 0.5rem;
        `
      : css`
          margin-left: 0.5rem;
        `}
    color: ${fontColor};
    display: flex;
    align-items: center;
  `,
  text: (fontColor: string) => css`
    color: ${fontColor};
    font-weight: 400;
    font-size: 1rem;
  `,
};
