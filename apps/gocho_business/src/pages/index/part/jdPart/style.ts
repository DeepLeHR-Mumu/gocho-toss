import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  partTitle: css`
    display: block;
    cursor: pointer;
    ${TEXTS.TITLE11};
    margin-bottom: 1.25rem;
  `,

  contour: css`
    width: 100%;
    margin: 0 -0.5rem;
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,
};
