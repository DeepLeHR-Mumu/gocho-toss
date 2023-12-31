import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  profile: (clickable: boolean, size: number) => css`
    border-radius: 50%;
    border: 1px solid ${COLOR.GRAY100};
    overflow: hidden;
    background-color: ${COLOR.WHITE};
    cursor: ${clickable ? "pointer" : "auto"};
    width: calc((${size} + 1) / 16 * 1rem);
    height: calc((${size} + 1) / 16 * 1rem);

    > img {
      object-fit: contain;
    }
  `,
};
