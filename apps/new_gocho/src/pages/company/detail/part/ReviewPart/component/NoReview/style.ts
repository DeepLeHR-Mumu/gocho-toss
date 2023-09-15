import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    justify-content: center;
    align-items: center;
    height: 11rem;
  `,

  text: css`
    color: ${NEWCOLORS.BLUEGRAY400};
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.625rem;
  `,
};
