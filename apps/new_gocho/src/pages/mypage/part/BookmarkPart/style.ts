import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  navWrapper: css`
    display: flex;
    margin-top: 2rem;
  `,

  subMenu: (isSelected: boolean) => css`
    ${TEXT.TITLE4_B1822};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 8.75rem;
    height: 3rem;
    color: ${isSelected ? COLOR.BLUE300 : COLOR.GRAY400};
    border-bottom: ${isSelected ? `2px solid ${COLOR.BLUE300}` : "none"};
  `,

  bottomLine: css`
    border-bottom: 1px solid ${COLOR.GRAY200};
  `,
};
