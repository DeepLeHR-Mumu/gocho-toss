import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  navWrapper: css`
    display: flex;
    margin-top: 2rem;
  `,

  subMenu: (isSelected: boolean) => css`
    ${NEWTEXTS.TITLE4_B1822};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 8.75rem;
    height: 3rem;
    color: ${isSelected ? NEWCOLORS.BLUE300 : NEWCOLORS.GRAY400};
    border-bottom: ${isSelected ? `2px solid ${NEWCOLORS.BLUE300}` : "none"};
  `,

  bottomLine: css`
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,
};
