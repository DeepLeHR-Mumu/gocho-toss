import { css } from "@emotion/react";

export const cssObj = {
  spinner: css`
    position: relative;
    width: 100%;
    margin-top: 2rem;
    height: 9rem;
    background-color: #f6f7fa;
  `,

  noDataSectionContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30vh;
  `,

  noDataDesc: css`
    font-weight: 700;
  `,

  buttonWrapper: css`
    width: 400px;
    margin: 4.5rem auto;
  `,
};
