import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  headerContainer: css`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    background-color: ${NEWCOLORS.WHITE};
    height: 3.5rem;
    z-index: 30;
    box-shadow: 0 2px 10px 0 #00000008;
  `,

  buttonContainer: css`
    width: 1152px;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
  `,
};
