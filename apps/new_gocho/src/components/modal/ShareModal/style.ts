import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  `,

  link: css`
    border-radius: 0.5rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    padding: 0.875rem 1.25rem 0.875rem 1.25rem;
    flex-grow: 1;
    ${NEWTEXTS.TITLE7}
  `,

  copyButton: css`
    color: ${NEWCOLORS.BLUE300};
  `,
};
