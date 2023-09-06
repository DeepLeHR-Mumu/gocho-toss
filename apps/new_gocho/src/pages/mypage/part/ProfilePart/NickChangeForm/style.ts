import { css } from "@emotion/react";

export const cssObj = {
  formBox: css`
    display: flex;
    gap: 3rem;

    button {
      padding: 1rem 0.75rem;
      height: 2.75rem;
      font-size: 0.875rem;
      border-radius: 1.5rem;
      margin: 0.25rem 0;
    }
  `,

  inputBox: css`
    height: 0.9rem;
    width: 31rem;
  `,

  buttonBox: css`
    display: flex;
    justify-content: flex-end;
    padding-top: 0.5rem;
    gap: 1rem;

    > button {
      padding: 0.5rem 0.38rem;
      width: 2.6rem;
      height: 1.8rem;
      font-size: 0.825rem;
    }
  `,
};
