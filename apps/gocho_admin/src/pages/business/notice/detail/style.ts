import { css } from "@emotion/react";

import { TEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  flexBox: css`
    display: flex;
    align-items: center;
    gap: 3rem;
  `,

  dataWrapper: css`
    display: flex;
    gap: 1rem;
  `,

  dataTitle: css`
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.BLUEGRAY300};
  `,

  data: css`
    ${TEXTS.BODY3};
  `,

  body: css`
    ${TEXTS.BODY4};
    margin: 2rem 0;
  `,
};
