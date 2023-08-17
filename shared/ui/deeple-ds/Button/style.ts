import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  default: css`
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    ${NEWTEXTS.TITLE6}
  `,

  small: css`
    width: 8.75rem;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;

    height: 2.75rem;
    ${NEWTEXTS.TITLE8}

    ${MOBILE} {
      ${NEWTEXTS.TITLE6}
    }
  `,

  long: css`
    width: 24.5rem;
    border-radius: 0.75rem;
    padding: 0.75rem 1rem;
    // height: 3.25rem;
    ${NEWTEXTS.TITLE9}

    ${MOBILE} {
      width: 20.5rem;
      // height: 2.75rem;
      ${NEWTEXTS.TITLE6}
    }
  `,
};
