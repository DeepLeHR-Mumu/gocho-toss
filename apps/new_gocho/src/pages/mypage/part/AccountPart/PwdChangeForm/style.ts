import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  formBox: css`
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    margin-bottom: 0.5rem;
  `,

  inputBox: css`
    display: flex;

    p {
      padding: 1rem 0;
      width: 8.25rem;
      line-height: 1rem;
      font-weight: 500;
      color: ${NEWCOLORS.BLUEGRAY400};
    }

    > div {
      width: 20.5rem;
      height: 3.25rem;
    }
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

  submitBox: css`
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
