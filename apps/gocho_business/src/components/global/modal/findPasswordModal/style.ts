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
    margin-bottom: 2.5rem;

    > li {
      margin-bottom: 1.25rem;

      :last-of-type {
        margin-bottom: 0;
      }
    }
  `,

  errorBox: css`
    margin-top: 0.2rem;
    min-height: 0.75rem;
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
