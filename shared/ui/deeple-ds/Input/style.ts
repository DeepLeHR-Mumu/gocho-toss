import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  input: css`
    flex: 1;
    ${NEWTEXTS.TITLE5_M1620}

    :focus {
      outline: none;
    }

    :disabled {
      color: ${NEWCOLORS.GRAY300};
      cursor: not-allowed;
    }

    ::placeholder {
      color: ${NEWCOLORS.GRAY300};
    }
  `,
};
