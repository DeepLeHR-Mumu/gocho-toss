import { css } from "@emotion/react";

import { TEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  topBar: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  buttonContainer: css`
    display: flex;
    gap: 0 0.5rem;
  `,

  infoTypeButton: (isActive: boolean) => css`
    ${TEXTS.TITLE9};
    padding: 0.75rem 1.25rem;
    background-color: ${isActive ? `${NEWCOLORS.BLUE300}` : `${NEWCOLORS.WHITE}`};
    color: ${isActive ? `${NEWCOLORS.WHITE}` : `${NEWCOLORS.BLUEGRAY400}`};
    border-radius: 1.5rem;
  `,

  moreButton: css`
    ${TEXTS.TITLE3};
    color: ${NEWCOLORS.BLUEGRAY400};
  `,
};
