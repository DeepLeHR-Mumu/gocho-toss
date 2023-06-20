import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  check: (isChecked: boolean) => css`
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
    background-color: ${isChecked ? `${NEWCOLORS.BLUE300}` : `${NEWCOLORS.WHITE}`};
    border: 1px solid ${isChecked ? `${NEWCOLORS.BLUE300}` : `${NEWCOLORS.GRAY300}`};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    color: ${NEWCOLORS.WHITE};
  `,
};
