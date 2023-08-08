import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  profile: (clickable: boolean) => css`
    border-radius: 50%;
    border: 1px solid ${NEWCOLORS.GRAY100};
    cursor: ${clickable ? "pointer" : "none"};
  `,
};
