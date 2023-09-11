import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  submenuIcon: (size: number) => {
    return css`
      width: ${size}rem;
      height: ${size}rem;
      color: ${NEWCOLORS.GRAY300};
    `;
  },
};
