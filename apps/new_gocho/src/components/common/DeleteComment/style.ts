import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  size: (size: number) => {
    return css`
      width: ${size}rem;
      height: ${size}rem;
    `;
  },

  gray: css`
    color: ${NEWCOLORS.GRAY300};
  `,

  red: css`
    color: ${NEWCOLORS.RED200};
  `,
};
