import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const cssObj = {
  spinner: css`
    position: relative;
    height: 6.125rem;
    border-bottom: 1px solid ${COLORS.GRAY80};
  `,
  wrapper: css`
    padding: 0.5rem 2rem;
    display: grid;
    grid-template-columns: 8rem 1fr auto;
    align-items: center;
    border-bottom: 1px solid ${COLORS.GRAY80};
  `,
  logo: css`
    height: 5rem;
    width: 5rem;
    border-radius: 0.75rem;
    position: relative;
  `,
  companyInfoBox: css`
    overflow: hidden;
    padding-right: 1rem;
  `,
  companyNameCSS: css`
    font-size: 1.25rem;
    font-weight: 700;
    display: block;
    ${shorten()};
  `,
  companyGenreCSS: css`
    font-size: 1rem;
  `,
  countingInfoBox: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  countBox: css`
    margin-left: 2rem;
  `,
  countTitle: css`
    font-size: 1rem;
    font-weight: 700;
    color: ${COLORS.GRAY60};
    margin-bottom: 0.5rem;
    display: block;
  `,
  countDesc: css`
    display: flex;
    align-items: center;
    color: ${COLORS.GRAY60};
    font-size: 0.875rem;
    line-height: 1;

    > svg {
      font-size: 1.125rem;
      margin-right: 0.5rem;
    }
  `,
  colorPoint: css`
    line-height: 1;
    color: ${COLORS.BLUE_FIRST30};
  `,
};
