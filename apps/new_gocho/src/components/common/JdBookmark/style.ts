import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  bookmarkIcon: (marked: boolean) => css`
    width: 1.5rem;
    height: 1.5rem;
    color: ${marked ? COLOR.RED100 : COLOR.GRAY200};
  `,
};
