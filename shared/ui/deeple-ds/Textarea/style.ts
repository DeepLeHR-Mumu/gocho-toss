import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  textarea: (height: number) => css`
    border: none;
    resize: none;
    flex: 1;
    height: ${height}rem;
    ${NEWTEXTS.TITLE5_M1620}

    :focus {
      outline: none;
    }

    :disabled {
      color: ${NEWCOLORS.GRAY450};
      cursor: not-allowed;
    }

    ::placeholder {
      color: ${NEWCOLORS.GRAY450};
    }
  `,
};
