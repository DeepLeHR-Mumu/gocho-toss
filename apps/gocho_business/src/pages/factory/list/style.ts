import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  title: css`
    color: ${COLORS.GRAY10};
    font-weight: 700;
    font-size: 1.25rem;
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
  `,

  listTitle: css`
    color: ${COLORS.GRAY10};
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  `,

  pageDescription: css`
    color: ${COLORS.GRAY10};
    font-weight: 400;
    margin-bottom: 2.5rem;
  `,
  rejectedTitle: css`
    color: ${COLORS.GRAY10};
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  `,

  rejectedBox: css`
    background-color: ${COLORS.GRAY95};
    margin-top: 2rem;
    padding: 1rem 2rem;
    border-bottom: 1px solid #dddddd;
  `,

  rejectedReason: css`
    white-space: pre-line;
    color: ${COLORS.GRAY10};
  `,

  factoryPartContainer: css`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
  `,

  cardContainer: css`
    display: flex;
    flex-wrap: wrap;
    width: 62rem;
    justify-content: space-between;
    align-items: flex-start;
  `,
};
