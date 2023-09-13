import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  bookmarkIcon: (marked: boolean) => css`
      width: 1.5rem;
      height: 1.5rem;
      color: ${marked ? NEWCOLORS.RED100 : NEWCOLORS.GRAY200};

      ${MOBILE} {
        width: 1.25rem;
        height: 1.25rem;
      }
    `,
};
