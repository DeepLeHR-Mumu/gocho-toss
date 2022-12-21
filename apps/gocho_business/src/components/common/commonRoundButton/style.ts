import { css } from "@emotion/react";

import { ColorDef } from "shared-type/style/color";

export const cssObj = {
  wrapper: (color: ColorDef) => css`
    background-color: ${color};
    border-radius: 1.5rem;
    padding: 0.75rem 0.5rem;
    display: flex;
    align-items: center;
    width: fit-content;
  `,
  icon: css`
    display: flex;
    color: black;
    align-items: center;
    margin-right: 0.75rem;
  `,
  text: css`
    font-weight: 400;
    color: black;
  `,
};
