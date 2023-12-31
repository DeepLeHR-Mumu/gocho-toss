import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";

export const cssObj = {
  welfareButtonContainer: css`
    display: flex;
    gap: 0 1rem;
    justify-content: space-between;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid ${COLOR.GRAY200};
  `,
};
