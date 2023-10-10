import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  size: (size: number) => css`
    width: ${size}rem;
    height: ${size}rem;
  `,

  gray: css`
    color: ${NEWCOLORS.GRAY450};
  `,

  red: css`
    color: ${NEWCOLORS.RED200};
  `,
};
