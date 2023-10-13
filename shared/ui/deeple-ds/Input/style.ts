import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  input: css`
    flex: 1;
    ${NEWTEXTS.BODY2_R1624};

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
