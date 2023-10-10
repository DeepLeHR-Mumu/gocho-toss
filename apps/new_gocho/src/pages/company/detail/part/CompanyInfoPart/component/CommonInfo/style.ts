import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  contentsWrapper: css`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  `,

  rowWrapper: css`
    display: flex;
    ${NEWTEXTS.BODY1_R1826}

    span:first-of-type {
      flex-direction: row;
      flex-basis: 7.1875rem;
      flex-shrink: 0;
      color: ${NEWCOLORS.BLUEGRAY400};
      ${NEWTEXTS.TITLE4_M1822}
    }
  `,

  content: css`
    ${NEWTEXTS.TITLE4_M1822}
  `,

  copy: css`
    margin-left: 1rem;
    color: ${NEWCOLORS.BLUE300};
    ${NEWTEXTS.TITLE4_M1822}
  `,
};
