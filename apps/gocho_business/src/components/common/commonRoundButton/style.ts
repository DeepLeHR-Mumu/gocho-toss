import { css } from "@emotion/react";

import { ColorDef } from "shared-type/style/color";

export const cssObj = {
  wrapper: (color: ColorDef) => css`
    background-color: ${color};
    border-radius: 1.5rem;
    padding: 0.75rem 0.5rem;
    display: flex;
    align-items: center;
  `,
  icon: (color: ColorDef) => css`
    display: flex;
    color: ${color};
    align-items: center;
    margin-right: 0.75rem;
  `,
  text: (color: ColorDef) => css`
    font-weight: 400;
    color: ${color};
  `,
};
