import { css } from "@emotion/react";
import { TEXT } from "shared-style/text";
import { COLOR } from "shared-style/color";

export const cssObj = {
  menu: (isSelected: boolean) => css`
    display: block;
    cursor: pointer;
    ${isSelected ? TEXT.TITLE5_B1620 : TEXT.TITLE5_M1620}
    color: ${isSelected ? COLOR.BLUE300 : COLOR.BLACK};
    margin-bottom: 1.5rem;

    :last-of-type {
      margin-bottom: 0;
    }
  `,
};
