import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  withIcon: css`
    border-radius: 1.5rem;
    padding: 0.75rem 1rem;
    ${NEWTEXTS.TITLE10}

    ${MOBILE} {
      padding: 0.375rem 0.5rem;
      ${NEWTEXTS.TITLE4}
    }
  `,

  oneLetter: css`
    border-radius: 0.5rem;
    padding: 0.25rem 0.5rem;
    ${NEWTEXTS.TITLE7}

    ${MOBILE} {
      border-radius: 0.25rem;
      padding: 0.25rem 0.375rem;
      ${NEWTEXTS.TITLE3}
    }
  `,

  dDay: css`
    padding: 0.375rem 1rem;
    ${NEWTEXTS.TITLE6}

    ${MOBILE} {
      padding: 0.25rem 0.5rem;
      ${NEWTEXTS.TITLE3}
    }
  `,
};
