import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    background-color: #f6f7fa;
  `,

  title: css`
    color: ${COLORS.GRAY10};
    font-weight: 700;
    font-size: 1.25rem;
    padding-top: 2.5rem;
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

  rejectedBox: css`
    background-color: #ffefef;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
    margin-bottom: 2rem;
  `,
  rejectedTitle: css`
    color: #ff6b6c;
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 8px;
  `,
  rejectedReason: css`
    color: #ff6b6c;
    white-space: pre-line;
    padding-left: 1rem;
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
