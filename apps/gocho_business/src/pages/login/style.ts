import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 64px);
  `,
  container: css`
    width: 28rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `,
  titleBox: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  `,
  gochoLogoBox: css`
    position: relative;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-bottom: 2rem;
  `,
  title: css`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 3.75rem;
    color: ${COLORS.GRAY10};
  `,
  formCSS: css`
    width: 100%;
  `,
  inputBox: (isError?: boolean) => css`
    margin-bottom: 1.75rem;
    position: relative;
    width: 100%;
    background-color: ${COLORS.GRAY100};
    border: 1px solid ${isError ? COLORS.ERROR_RED40 : COLORS.GRAY10};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  inputCSS: css`
    font-size: 1rem;
    padding: 0.75rem 1rem;
    font-weight: 400;
    width: 100%;
    box-shadow: 0 0 0 1000px ${COLORS.GRAY100} inset;

    ::placeholder {
      font-size: 1rem;
      color: ${COLORS.GRAY40};
    }
  `,
  eyeButtonCSS: css`
    z-index: 10;
    font-size: 1.5rem;
    color: ${COLORS.GRAY40};
    position: absolute;
    right: 1rem;
  `,
  errorMsg: css`
    font-size: 1rem;
    height: 1rem;
    margin: 2rem 0;
    text-align: center;
    line-height: 1;
    display: block;
    color: ${COLORS.ERROR_RED40};
    font-weight: 400;
  `,
  bottomBox: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  findPasswordButton: css`
    font-size: ${COLORS.GRAY10};
    font-size: 0.875rem;
    font-weight: 400;
    text-decoration: underline;
  `,
  loginButton: css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    color: ${COLORS.GRAY100};
    background-color: ${COLORS.GRAY65};
    height: 3rem;
  `,
  submitButton: (isActive: boolean) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${isActive ? COLORS.BLUE_FIRST40 : COLORS.GRAY65};
    color: ${COLORS.GRAY100};
    border-radius: 0.375rem;
    font-size: 1rem;
    font-weight: 700;
    padding: 1rem 0;
  `,
  signupButton: css`
    display: block;
    text-align: center;
    margin-top: 2rem;
    color: ${COLORS.BLUE_NEON30};
  `,
};
