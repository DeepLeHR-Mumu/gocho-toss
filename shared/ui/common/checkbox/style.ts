import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";

export const cssObj = {
  check: (isChecked: boolean) => css`
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
    background-color: ${isChecked ? `${COLOR.BLUE300}` : `${COLOR.WHITE}`};
    border: 1px solid ${isChecked ? `${COLOR.BLUE300}` : `${COLOR.GRAY450}`};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    color: ${COLOR.WHITE};
  `,
};
