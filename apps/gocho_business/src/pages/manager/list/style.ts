import { css } from "@emotion/react";

import { COLORS, NEWCOLORS } from "shared-style/color";

export const cssObj = {
  contentWrapper: css`
    display: flex;
    gap: 0 1.25rem;
  `,

  partContainer: css`
    flex-grow: 1;
    position: relative;
    background-color: ${NEWCOLORS.WHITE};
    padding: 2rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  spinner: css`
    position: relative;
    width: 100%;
    height: 30rem;
  `,

  h2Title: css`
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${COLORS.GRAY10};
  `,

  pageDesc: css`
    color: ${COLORS.GRAY10};
    margin-bottom: 2rem;
  `,

  tableWrapper: css`
    background-color: ${COLORS.GRAY100};
    padding: 1.5rem;
  `,

  tableHeader: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    border-bottom: 1px solid ${COLORS.GRAY65};
  `,

  header: css`
    font-size: 1rem;
    color: ${COLORS.GRAY10};
    font-weight: 700;
    display: block;
    text-align: left;
    padding: 0 0.75rem 0.75rem 0.75rem;
  `,

  rowContainer: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    border-bottom: 0.5px solid ${COLORS.GRAY65};

    :last-of-type {
      border-bottom: 0;
    }
  `,

  data: css`
    font-size: 0.875rem;
    padding: 0.75rem;
  `,
};
