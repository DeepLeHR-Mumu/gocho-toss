import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  spinnerBox: css`
    width: 100%;
    min-height: 30vh;
    position: relative;
  `,
  wrapper: css`
    margin-bottom: 1.5rem;
  `,
  subTitle: css`
    font-size: 1rem;
    font-weight: 700;
    color: ${COLORS.GRAY10};
    margin-bottom: 0.5rem;
    display: inline-block;
  `,
  welfareBox: css`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  `,
};
