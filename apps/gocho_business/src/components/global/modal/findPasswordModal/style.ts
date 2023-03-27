import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 80;
    width: 22rem;
    height: auto;
    padding: 2rem;
    background-color: ${COLORS.GRAY100};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    outline: none;
  `,
  closeBtn: css`
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;
    border-radius: 50%;
  `,
  logoContainer: css`
    width: 7.5rem;
    position: relative;
    margin-bottom: 1rem;

    > img {
      object-fit: contain;
    }
  `,
  desc: css`
    color: ${COLORS.BLUE_FIRST40};
    font-size: 0.875rem;
    font-weight: 400;
  `,
  formCSS: css`
    width: 100%;
  `,
  formArr: css`
    margin: 1.5rem 0 0 0;
    width: 100%;
    display: flex;
    flex-direction: column;

    > li {
      position: relative;
    }
  `,
  label: ({ isError, isFocus, isSuccess }: { isError: boolean; isFocus: boolean; isSuccess: boolean }) => {
    const defaultCSS = css`
      font-size: 0.75rem;
      position: absolute;
      left: 0;
      top: 0;
      margin-left: 1.75rem;
      transform: translate(0%, -50%);
      background-color: ${COLORS.GRAY100};
      padding: 0 0.25rem;
      height: 1rem;
      text-align: center;
    `;

    if (isError) {
      return css`
        ${defaultCSS};
        color: ${COLORS.ERROR_RED30};
      `;
    }
    if (isFocus || isSuccess) {
      return css`
        ${defaultCSS};
        color: ${COLORS.BLUE_FIRST40};
      `;
    }
    return css`
      ${defaultCSS};
      color: ${COLORS.GRAY60};
    `;
  },
  input: ({ isError, isFocus, isSuccess }: { isError: boolean; isFocus: boolean; isSuccess: boolean }) => {
    const defaultCSS = css`
      width: 100%;
      border-radius: 2rem;
      font-size: 1rem;
      border: 1px solid;
      height: 3.25rem;
      padding: 0 2.6rem 0 1.75rem;
    `;

    if (isError) {
      return css`
        ${defaultCSS};
        border-color: ${COLORS.ERROR_RED30};
      `;
    }
    if (isFocus || isSuccess) {
      return css`
        ${defaultCSS};
        border-color: ${COLORS.BLUE_FIRST40};
      `;
    }
    return css`
      ${defaultCSS};
      border-color: ${COLORS.GRAY60};
    `;
  },
  deleteButton: css`
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 1.2rem;
    color: ${COLORS.ERROR_RED30};
  `,
  successIconBox: css`
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 1.2rem;
    color: ${COLORS.BLUE_FIRST40};
  `,
  errorBox: css`
    margin-top: 0.5rem;
    height: 1.5rem;
    margin-bottom: 1.25rem;
  `,
  errorMsgCSS: css`
    font-size: 0.875rem;
    color: ${COLORS.ERROR_RED30};
    text-align: center;
  `,
  loginButton: css`
    margin-bottom: 0.3rem;
  `,
};
