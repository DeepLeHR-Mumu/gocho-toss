import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  searchBox: css`
    flex-grow: 1;
    border-radius: 0.5rem;
    border: 1px solid ${COLORS.GRAY70};
    background-color: ${COLORS.GRAY100};
    height: 2rem;
    padding: 0.25rem 0.5rem;
    margin-right: 1rem;
  `,

  searchCompanyButton: css`
    font-size: 0.75rem;
    margin-right: 1rem;
    padding: 0.25rem 0.5rem;
    border: 2px solid ${COLORS.GRAY10};
    background-color: ${COLORS.BLUE_NEON40};
    color: ${COLORS.GRAY100};
  `,

  selectBox: css`
    border: 1px solid ${COLORS.GRAY70};
    background-color: ${COLORS.GRAY100};
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
    color: ${COLORS.GRAY30};
    margin-right: 1rem;
  `,

  inputBox: css`
    flex-grow: 1;
    border-radius: 0.5rem;
    border: 1px solid ${COLORS.GRAY70};
    background-color: ${COLORS.GRAY100};
    height: 2rem;
    padding: 0.25rem 0.5rem;
  `,

  errorMessage: css`
    width: fit-content;
    line-height: 1;
    margin: 0 0 0 auto;
    color: ${COLORS.ERROR_RED40};
    font-size: 0.875rem;
    height: 0.875rem;
  `,

  submitButton: css`
    font-size: 1.25rem;
    margin: 2rem auto 0;
    padding: 0.5rem;
    width: 30%;
    border: 2px solid ${COLORS.GRAY10};
    background-color: ${COLORS.BLUE_FIRST40};
    color: ${COLORS.GRAY100};
  `,

  checkMsgBox: css`
    color: ${COLORS.BLUE_FIRST40};
    font-weight: 500;
    text-align: center;
    margin-top: 1rem;
  `,
};
