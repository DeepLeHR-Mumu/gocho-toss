import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  addInputButton: css`
    display: flex;
    gap: 0 0.5rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 0.75rem;
    height: 3.25rem;
    padding: 1rem;
    background-color: ${NEWCOLORS.GRAY50};
    ${TEXTS.TITLE5};

    > svg {
      color: ${NEWCOLORS.GRAY300};
    }
  `,
};
