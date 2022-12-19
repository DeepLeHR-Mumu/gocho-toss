import { css } from "@emotion/react";

import { ColorDef } from "shared-type/style/color";

export const cssObj = {
  wrapper: (backgroundColor: ColorDef, borderColor: ColorDef, fontColor: ColorDef) => css`
    padding: 0.75rem 1rem;
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
