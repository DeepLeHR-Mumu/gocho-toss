import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  size: (size: number) => css`
    width: ${size}rem;
    height: ${size}rem;
  `,

  gray: css`
    color: ${COLOR.GRAY450};
  `,

  red: css`
    color: ${COLOR.RED200};
  `,
};
