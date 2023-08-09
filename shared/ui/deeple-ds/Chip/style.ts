import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { MOBILE } from "shared-style/mediaQuery";
// import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  default: css`
    border-radius: 1.5rem;
    padding: 0.75rem 1rem;
    ${NEWTEXTS.TITLE10}

    ${MOBILE} {
      padding: 0.375rem 0.5rem;
      ${NEWTEXTS.TITLE4}
    }
  `,

  small: css`
    padding: 0.375rem 1rem;
    ${NEWTEXTS.TITLE6}

    ${MOBILE} {
      padding: 0.25rem 0.5rem;
      ${NEWTEXTS.TITLE2}
    }
  `,
};
