import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
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

  inputBox: (isTextarea: boolean) => css`
    flex-grow: 1;
    border-radius: 0.5rem;
    border: 1px solid ${COLORS.GRAY70};
    background-color: ${COLORS.GRAY100};
    height: ${isTextarea ? "10rem" : "2rem"};
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

  buttonWrapper: css`
    display: flex;
    justify-content: center;
  `,

  checkMsgBox: css`
    color: ${COLORS.BLUE_FIRST40};
    font-weight: 500;
    text-align: center;
    margin-top: 1rem;
  `,
};
