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

  button: css`
    background-color: ${COLOR.BLUE250};
    color: ${COLOR.WHITE};
    font-size: 0.75rem;
    width: fit-content;
    padding: 0.25rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    border-radius: 0.25rem;
  `,

  errorMsgBox: css`
    color: ${COLOR.BLUE300};
    font-weight: 500;
    text-align: center;
    margin-top: 1rem;
  `,

  companySelectBox: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 1rem;

    p {
      font-size: 1rem;
      color: ${COLOR.GRAY700};
      padding: 0.25rem;
    }
  `,

  point: css`
    color: ${COLOR.BLUE300};
    font-weight: 500;
  `,

  buttonBox: css`
    width: fit-content;
    margin: 2rem auto 0;
  `,
};
