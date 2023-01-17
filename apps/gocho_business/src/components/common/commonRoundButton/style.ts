import { css } from "@emotion/react";

import { ColorDef } from "shared-type/style/color";

export const cssObj = {
  wrapper: (color: ColorDef) => css`
    background-color: ${color};
    border-radius: 1.5rem;
    height: 2.5rem;
    padding: 0 0.75rem;
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
    color: black;
  `,
};
