import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  addFieldButton: css`
    display: flex;
    gap: 0 0.5rem;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 0.75rem;
    height: 3.25rem;
    padding: 1rem;
    background-color: ${COLOR.GRAY50};
    ${TEXTS.TITLE5};

    > svg {
      color: ${COLOR.GRAY450};
    }
  `,
};
