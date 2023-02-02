import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    border-top: 1px solid ${COLORS.GRAY80};
  `,
  name: css`
    display: flex;
    align-items: center;
    font-size: 1rem;
  `,
  profile: css`
    width: 3rem;
    height: 3rem;
    background-color: ${COLORS.GRAY70};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.75rem;
    border-radius: 50%;
    font-weight: 400;
    font-size: 1rem;
  `,
};
