import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  h2Title: css`
    margin-top: 2rem;
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
    width: 100%;
    padding: 0.75rem 2rem;
    margin-bottom: 3rem;
  `,
  tableHeader: css`
    display: flex;
    border-bottom: 1px solid ${COLORS.GRAY10};
    padding: 0.875rem 1rem;
  `,
  header: css`
    color: ${COLORS.GRAY10};
    font-weight: 700;
    width: 50%;
  `,
  rowContainer: css`
    display: flex;
    border-bottom: 0.5px solid #cccccc;
    padding: 0.875rem 1rem;
  `,
  data: css`
    font-size: 0.875rem;
    width: 50%;
  `,
};
