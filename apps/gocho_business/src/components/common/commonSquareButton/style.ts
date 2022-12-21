import { css } from "@emotion/react";

import { ColorDef } from "shared-type/style/color";

export const cssObj = {
  wrapper: (backgroundColor: ColorDef, borderColor: ColorDef, fontColor: ColorDef) => css`
    display: flex;
    align-items: center;
    width: fit-content;
    height: 2.5rem;
    padding: 0 1rem;
    border: 1px solid ${borderColor};
    background-color: ${backgroundColor};
    color: ${fontColor};
  `,
  icon: (location: "left" | "right") => {
    const iconLocation =
      location === "left"
        ? css`
            margin-right: 12px;
          `
        : css`
            margin-left: 12px;
          `;
    return css`
      ${iconLocation};
      display: flex;
      justify-content: center;
    `;
  },
  text: css`
    font-weight: 400;
  `,
};
