import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  spinner: css`
    position: relative;
    width: 100%;
    height: 100vh;
  `,
  wrapper: css`
    margin-top: 2rem;
  `,
  container: css``,
  header: css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `,
  title: css`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${COLORS.GRAY10};
  `,
  desc: css`
    font-size: 1rem;
    font-weight: 400;
    color: ${COLORS.GRAY10};
  `,
  topButtonBox: css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 28.625rem;
  `,
  sharedButtonBox: css`
    margin: auto;
    width: 100%;
    max-width: 25rem;
  `,
  companyInfoBox: css`
    padding: 2rem;
  `,
};
