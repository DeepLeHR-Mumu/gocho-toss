import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  spinnerBox: css`
    position: relative;
    width: 100%;
    min-height: 30vh;
  `,
  wrapper: css`
    position: relative;
  `,
  payContainer: css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `,
  rowBox: css`
    display: flex;
    align-items: flex-start;
  `,
  payLabel: css`
    display: flex;
    align-items: center;
  `,
  container: (width?: number) => {
    if (width) {
      return css`
        width: ${width}%;
        margin-bottom: 1.75rem;
      `;
    }
    return css`
      margin-bottom: 1.75rem;
    `;
  },
  subTitle: (isError: boolean, isDisabled: boolean) => {
    const defaultCSS = css`
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 1rem;
      display: inline-block;
    `;
    if (isDisabled) {
      return css`
        ${defaultCSS};
        color: ${COLORS.GRAY65};
      `;
    }

    return css`
      ${defaultCSS};
      color: ${isError ? COLORS.ERROR_RED40 : COLORS.GRAY10};
    `;
  },
  textValue: (isDisabled: boolean) => css`
    font-size: 1rem;
    font-weight: 400;
    padding: 0 1rem;
    color: ${isDisabled ? COLORS.GRAY65 : COLORS.GRAY10};
  `,
  employeeNumber: (isDisabled: boolean) => css`
    display: flex;
    align-items: center;
    width: 90%;
    > svg {
      font-size: 2rem;
      margin-right: 0.5rem;
      color: ${isDisabled ? COLORS.GRAY65 : COLORS.GRAY10};
    }
  `,
  input: (isError: boolean, isDisabled: boolean) => {
    const defaultCSS = css`
      border: 1px solid ${isError ? COLORS.ERROR_RED40 : COLORS.GRAY10};
      padding: 0rem 1rem;
      border-radius: 0.3125rem;
      height: 2.5rem;
      font-size: 1rem;
      width: 100%;
      font-weight: 400;

      ::placeholder {
        color: ${COLORS.GRAY30};
      }
    `;
    if (isDisabled) {
      return css`
        ${defaultCSS};
        border-color: ${COLORS.GRAY65};
        color: ${COLORS.GRAY65};
      `;
    }
    return css`
      ${defaultCSS};
    `;
  },
  unit: (isDisabled: boolean) => css`
    font-size: 1rem;
    font-weight: 400;
    padding: 0.25rem;
    color: ${isDisabled ? COLORS.GRAY65 : COLORS.GRAY10};
  `,
  address: css`
    display: flex;
    align-items: center;
    width: 90%;
  `,
  findAddressButton: css`
    background-color: ${COLORS.GRAY80};
    color: ${COLORS.GRAY10};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 0.5rem;
    border-radius: 1.5rem;
    font-size: 1rem;
    font-weight: 400;
    margin-right: 0.5rem;
    > svg {
      margin-right: 0.5rem;
    }
  `,
  inputBox: (isDisabled: boolean) => css`
    display: flex;
    margin-left: 1rem;
    align-items: center;
    position: relative;
    width: 100%;

    > svg {
      font-size: 1.25rem;
      color: ${isDisabled ? COLORS.GRAY65 : COLORS.GRAY10};
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translate(0, -50%);
    }
  `,
  inputAddress: (isError: boolean, isDisabled: boolean) => {
    const defaultCSS = css`
      border: 1px solid ${isError ? COLORS.ERROR_RED40 : COLORS.GRAY10};
      text-align: left;
      height: 2.5rem;
      padding: 0rem 1rem 0rem 2.75rem;
      font-size: 1rem;
      border-radius: 0.3125rem;
      width: 100%;
      font-weight: 400;
      justify-content: flex-start;
      color: ${COLORS.GRAY10};

      ::placeholder {
        color: ${COLORS.GRAY30};
      }
    `;
    if (isDisabled) {
      return css`
        ${defaultCSS}
        border-color: ${COLORS.GRAY65};
        color: ${COLORS.GRAY65};
      `;
    }
    return css`
      ${defaultCSS}
    `;
  },
  nozoBox: (isDisabled: boolean) => css`
    display: flex;
    margin-bottom: 0.5rem;
    > svg {
      font-size: 2rem;
      color: ${isDisabled ? COLORS.GRAY65 : COLORS.GRAY10};
      margin-right: 0.75rem;
    }
    > label {
      margin-right: 0.5rem;
    }
  `,
  payBox: css`
    width: 45%;
    margin-bottom: 0.5rem;
  `,
  infoTitle: (isError: boolean, isDisabled: boolean) => {
    const defaultCSS = css`
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
      display: block;
    `;
    if (isDisabled) {
      return css`
        ${defaultCSS};
        color: ${COLORS.GRAY65};
      `;
    }

    return css`
      ${defaultCSS};
      color: ${isError ? COLORS.ERROR_RED40 : COLORS.GRAY10};
    `;
  },
  errorMsg: css`
    color: ${COLORS.ERROR_RED40};
    font-size: 0.75rem;
    margin: 0.25rem 0 0 0;
    height: 1.25rem;
  `,
};
