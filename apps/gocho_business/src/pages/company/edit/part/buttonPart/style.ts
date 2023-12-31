import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";

export const cssObj = {
  headerContainer: css`
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: ${COLOR.WHITE};
    height: 5rem;
    z-index: 50;
    box-shadow: 0 2px 10px 0 #00000008;
  `,

  buttonContainer: css`
    width: 1152px;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
  `,
};
