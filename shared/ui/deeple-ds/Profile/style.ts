import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  profile: (clickable: boolean, size: number) => css`
    border-radius: 50%;
    border: 1px solid ${NEWCOLORS.GRAY100};
    overflow: hidden;
    cursor: ${clickable ? "pointer" : "auto"};
    width: calc((${size} / 16) * 1rem);
    height: calc((${size} / 16) * 1rem);

    > img {
      object-fit: contain;
    }
  `,
};
