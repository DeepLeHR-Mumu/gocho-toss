import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  spinner: css``,
  wrapper: css`
    background-color: #edf1f4;
    padding: 2rem;
    border-radius: 1.5rem;
    margin-bottom: 2.5rem;
  `,
  topBox: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  logoBox: css`
    position: relative;
    width: 5rem;
    height: 5rem;
    border-radius: 0.75rem;
    background-color: ${COLORS.GRAY100};
    border: 8px solid ${COLORS.GRAY100};
  `,
  titleBox: css``,
  countBox: css`
    flex-shrink: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  `,
  countLine: css``,
  countTitle: css``,
  countDesc: css``,
  colorPoint: css``,
  bottomBox: css``,
  subTitle: css``,
  subDesc: css``,
};
