import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  viewInfoBox: css`
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    gap: 0.5rem 0;
  `,
  infoBoxContainer: css`
    display: flex;
    align-items: center;
  `,
  iconBox: css`
    color: ${COLORS.GRAY10};
    font-size: 1.5rem;
    margin-right: 0.5rem;
  `,
  countName: css`
    font-weight: 700;
  `,
  countCSS: css`
    word-break: break-all;
  `,
};
