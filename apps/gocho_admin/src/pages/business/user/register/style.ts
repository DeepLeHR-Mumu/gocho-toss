import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  searchBox: css`
    flex-grow: 1;
    border-radius: 0.5rem;
    border: 1px solid ${COLOR.GRAY300};
    background-color: ${COLOR.WHITE};
    height: 2rem;
    padding: 0.25rem 0.5rem;
    margin-right: 1rem;
  `,

  searchCompanyButton: css`
    font-size: 0.75rem;
    margin-right: 1rem;
    padding: 0.25rem 0.5rem;
    border: 2px solid ${COLOR.GRAY900};
    background-color: ${COLOR.BLUE300};
    color: ${COLOR.WHITE};
  `,

  selectBox: css`
    border: 1px solid ${COLOR.GRAY300};
    background-color: ${COLOR.WHITE};
    border-radius: 0.5rem;
    padding: 0.25rem 0.5rem;
  `,

  inputWrapper: css`
    width: 30rem;
    margin: 0 auto 1rem;
  `,

  inputContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  `,

  inputTitle: css`
    color: ${COLOR.GRAY600};
    margin-right: 1rem;
  `,

  inputBox: css`
    flex-grow: 1;
    border-radius: 0.5rem;
    border: 1px solid ${COLOR.GRAY300};
    background-color: ${COLOR.WHITE};
    height: 2rem;
    padding: 0.25rem 0.5rem;
  `,

  errorMessage: css`
    width: fit-content;
    line-height: 1;
    margin: 0 0 0 auto;
    color: ${COLOR.RED200};
    font-size: 0.875rem;
    height: 0.875rem;
  `,

  submitButton: css`
    font-size: 1.25rem;
    margin: 2rem auto 0;
    padding: 0.5rem;
    width: 30%;
    border: 2px solid ${COLOR.GRAY900};
    background-color: ${COLOR.BLUE300};
    color: ${COLOR.WHITE};
  `,

  checkMsgBox: css`
    color: ${COLOR.BLUE300};
    font-weight: 500;
    text-align: center;
    margin-top: 1rem;
  `,
};
