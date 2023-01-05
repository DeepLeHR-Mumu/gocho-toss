import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    margin-top: 2rem;
  `,
  title: css`
    font-size: 1.25rem;
    font-weight: 700;
  `,
  basicInfo: css`
    padding: 1.75rem;
  `,
  infoTitle: css`
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
  `,
  infoDesc: css`
    font-size: 1rem;
    padding: 0.75rem 1rem;
  `,
  formBox: css`
    padding-left: 1.75rem;
    margin-bottom: 2.5rem;
  `,
  formTitle: (isError: boolean) => css`
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
    color: ${isError ? COLORS.ERROR_RED40 : COLORS.GRAY10};
    display: block;
  `,
  label: (isError: boolean) => css`
    border: 1px solid ${isError ? COLORS.ERROR_RED40 : COLORS.GRAY10};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 28rem;
    padding: 0 1rem;
    height: 2.5rem;
  `,
  input: css`
    font-size: 1rem;
    font-weight: 400;
    width: 90%;
    box-shadow: 0 0 0 1000px ${COLORS.GRAY100} inset;

    ::placeholder {
      font-size: 1rem;
      color: ${COLORS.GRAY40};
    }
  `,
  showButton: css`
    font-size: 1.5rem;
    color: ${COLORS.GRAY10};
  `,
  errorBox: css`
    height: 1rem;
    margin: 0.25rem 0 1.25rem;
  `,
  errorDesc: css`
    font-size: 0.75rem;
    color: ${COLORS.ERROR_RED40};
  `,
};
