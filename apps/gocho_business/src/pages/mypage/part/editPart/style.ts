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

    > li {
      margin-bottom: 2rem;
    }
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
  formTitle: (isError: undefined | string) => css`
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
    color: ${isError ? COLORS.ERROR_RED40 : COLORS.GRAY10};
    display: block;
  `,
  label: (isError: undefined | string) => css`
    border: 1px solid ${isError ? COLORS.ERROR_RED40 : COLORS.GRAY10};
    display: flex;
    align-items: center;
    border-radius: 0.3125rem;
    overflow: hidden;
    justify-content: space-between;
    width: 100%;
    max-width: 28rem;
    position: relative;
  `,
  input: css`
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    padding: 0 3rem 0 1rem;
    height: 2.5rem;
    box-shadow: 0 0 0 1000px ${COLORS.GRAY100} inset;

    ::placeholder {
      font-size: 1rem;
      color: ${COLORS.GRAY40};
    }
  `,
  showButton: css`
    right: 1rem;
    position: absolute;
    z-index: 10;
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
  submitButton: (isActive: boolean) => css`
    width: 100%;
    font-size: 1rem;
    color: ${COLORS.GRAY100};
    border-radius: 0.3125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.875rem 0;
    line-height: 1;
    max-width: 25rem;
    margin: auto;
    background-color: ${isActive ? COLORS.BLUE_FIRST40 : COLORS.GRAY65};
  `,
};
