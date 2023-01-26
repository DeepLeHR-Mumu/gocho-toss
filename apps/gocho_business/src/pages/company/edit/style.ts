import { css } from "@emotion/react";

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
    margin-bottom: 5.5rem;
  `,
  title: css`
    font-size: 1.25rem;
    font-weight: 700;
  `,
  desc: css`
    font-size: 1rem;
    font-weight: 400;
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
