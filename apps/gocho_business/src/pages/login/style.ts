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
  inputBox: css`
    > li {
      margin-bottom: 1.75rem;
      width: 100%;
      background-color: ${COLORS.GRAY100};
      border: 1px solid ${COLORS.GRAY10};
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 1rem;
    }
  `,
  inputCSS: css`
    font-size: 1rem;
    font-weight: 400;
    width: 90%;
    box-shadow: 0 0 0 1000px ${COLORS.GRAY100} inset;

    ::placeholder {
      font-size: 1rem;
      color: ${COLORS.GRAY40};
    }
  `,
  eyeButtonCSS: css`
    font-size: 1.5rem;
    color: ${COLORS.GRAY40};
  `,
  errorMsg: css`
    font-size: 1rem;
    height: 1rem;
    margin: 1rem 0;
    text-align: center;
    line-height: 0;
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
    background-color: #ccc;
    height: 3rem;
  `,
};
