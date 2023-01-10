import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const cssObj = {
  spinner: css`
    position: relative;
    height: 6.0625rem;
    border-bottom: 1px solid ${COLORS.GRAY65};
  `,
  wrapper: css`
    padding: 0.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid ${COLORS.GRAY65};
  `,
  basicInfoBox: css`
    display: flex;
    align-items: center;
  `,
  logo: css`
    height: 5rem;
    width: 5rem;
    border-radius: 0.75rem;
    position: relative;
    margin-right: 3rem;
  `,
  companyInfoBox: css`
    display: flex;
    flex-direction: column;
  `,
  companyNameCSS: css`
    font-size: 1.25rem;
    font-weight: 700;
    width: 100%;
    max-width: 40rem;
    ${shorten()};
  `,

  companyGenreCSS: css`
    font-size: 1rem;
  `,
  countingInfoBox: css`
    display: flex;
    align-items: center;
  `,
};
