import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  menu: (isSelected: boolean) => css`
    display: block;
    cursor: pointer;
    ${isSelected ? NEWTEXTS.TITLE5_B1620 : NEWTEXTS.TITLE5_M1620}
    color: ${isSelected ? NEWCOLORS.BLUE300 : NEWCOLORS.BLACK};
    margin-bottom: 1.5rem;

    :last-of-type {
      margin-bottom: 0;
    }
  `,
};
