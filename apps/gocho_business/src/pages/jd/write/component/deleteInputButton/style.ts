import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  deleteInputButton: css`
    position: absolute;
    right: 0;
    margin-right: 0.5rem;
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
    color: ${COLOR.BLACK};
    background-color: ${COLOR.GRAY300};
  `,
};
