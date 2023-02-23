import { css } from "@emotion/react";

export const cssObj = {
  sectionContainer: css`
    width: 60%;
    margin: 0 auto;
  `,

  dataContainer: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0.5rem;
  `,

  dataTitle: css`
    font-size: 1.25rem;
    font-weight: 700;
    margin-right: 2rem;
    white-space: nowrap;
    word-break: keep-all;
    width: 6.5rem;
  `,

  dataBox: css`
    line-height: 1.5;
    word-break: break-all;
  `,
};
