import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  dDayChip: css`
    border-radius: 1.5rem;
    padding: 0.375rem 1rem;
    white-space: nowrap;
    ${NEWTEXTS.TITLE6}

    ${MOBILE} {
      border-radius: 1.5rem;
      padding: 0.25rem 0.5rem;
      ${NEWTEXTS.TITLE3}
    }
  `,
};
