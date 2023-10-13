import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";

import { subPageTitle } from "@/style";

export const cssObj = {
  title: css`
    ${subPageTitle};
  `,

  formContainer: css`
    width: 40%;
    margin: 0 auto;
  `,

  inputContainer: css`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  `,

  inputBox: css`
    flex-grow: 1;
    border-radius: 0.5rem;
    border: 1px solid ${COLOR.GRAY300};
    background-color: ${COLOR.WHITE};
    height: 2rem;
    padding: 0.25rem 0.5rem;
    margin-right: 1rem;
  `,

  errorMsgBox: css`
    color: ${COLOR.BLUE300};
    font-weight: 500;
    text-align: center;
    margin: 1rem 0;
  `,

  buttonBox: css`
    width: fit-content;
    margin: 2rem auto 0;
  `,
};
