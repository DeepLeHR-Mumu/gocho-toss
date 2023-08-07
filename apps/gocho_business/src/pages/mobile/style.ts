import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  container: css`
    width: 100vw;
    height: 100vh;
  `,

  flexColumn: css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `,

  description: css`
    text-align: center;
    ${TEXTS.BODY2}
  `,

  inquiry: css`
    margin-top: 0.5rem;
    color: ${NEWCOLORS.BLUEGRAY400};
    ${TEXTS.BODY1}
  `,
};
