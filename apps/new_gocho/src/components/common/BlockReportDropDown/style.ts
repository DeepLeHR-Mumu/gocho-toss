import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  submenuIcon: (size: number) => css`
    width: ${size}rem;
    height: ${size}rem;
    color: ${COLOR.GRAY450};
  `,

  submenu: css`
    width: 100%;
    text-align: left;
    padding: 0.625rem 1rem;
  `,
};
