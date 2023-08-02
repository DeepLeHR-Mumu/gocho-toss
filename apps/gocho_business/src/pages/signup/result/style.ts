import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  container: css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  check: css`
    width: 3.5rem;
    height: 3.5rem;
    color: ${NEWCOLORS.BLUE250};
    margin-bottom: 1.25rem;
  `,

  text: css`
    ${TEXTS.BODY4}
  `,
};
