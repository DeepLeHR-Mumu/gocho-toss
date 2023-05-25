import { css } from "@emotion/react";

export const cssObj = {
  viewInfoBox: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 4rem;
    gap: 0.5rem 0;
    margin-right: 1rem;
    padding-right: 3rem;
    border-right: 1px solid gray;

    :last-of-type {
      border-right: none;
    }
  `,

  countName: css``,

  count: css`
    font-size: 1.5rem;
    font-weight: 600;
  `,
};
