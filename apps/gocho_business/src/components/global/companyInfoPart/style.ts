import { css } from "@emotion/react";

export const cssObj = {
  wrapper: css`
    padding: 0.5rem 2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;
  `,
  flexContainer: css`
    display: flex;
  `,
  logo: css`
    height: 5rem;
    width: 5rem;
    border-radius: 0.75rem;
    background-color: pink;
    margin-right: 4rem;
  `,

  companyInfoBox: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  companyNameCSS: css`
    font-size: 1.25rem;
    font-weight: 700;
  `,

  companyGenreCSS: css`
  `,

  countingInfoBox: css`
    display: flex;
    align-items: center;
  `,
};
