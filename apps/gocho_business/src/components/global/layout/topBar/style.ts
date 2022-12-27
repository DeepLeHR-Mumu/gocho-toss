import { css } from "@emotion/react";

export const cssObj = {
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem 1rem 2rem;
    height: 4rem;
    width: 100%;
    border-bottom: 1px solid #cccccc;
  `,
  container: css`
    display: flex;
    align-items: center;
  `,
  logo: css`
    height: 2rem;
    width: 2rem;
    background-color: pink;
    margin-right: 1rem;
  `,
  title: css`
    font-size: 1.25rem;
    font-weight: 700;
  `,
  logoutButton: css`
    padding: 0.75rem 1rem;
    border: 1px solid #000000;
  `,
  signUpButton: css`
    padding: 0.75rem 1rem;
    border: 1px solid #000000;
  `,
};
