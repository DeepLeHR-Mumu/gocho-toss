import { css } from "@emotion/react";

import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  divider: css`
    margin: 3rem 0;
    ${MOBILE} {
      margin: 1.5rem 0;
    }
  `,

  blank: css`
    height: 7.5rem;
  `,
};
