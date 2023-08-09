import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    width: fit-content;
    padding: 0.75rem 1.25rem;
    border-radius: 0.75rem;
    opacity: 0.65;
    background-color: ${NEWCOLORS.BLACK};
    color: ${NEWCOLORS.WHITE};
    ${NEWTEXTS.TITLE7}

    ${MOBILE} {
      ${NEWTEXTS.TITLE4};
    }
  `,
};
