import { css } from "@emotion/react";
// import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  `,

  profileWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  `,

  input: css`
    width: 100%;
    height: 5rem;
  `,

  buttonWrapper: css`
    margin-top: 0.75rem;
    width: 100%;
    display: inline-flex;
    justify-content: flex-end;
  `,
};
