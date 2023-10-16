import { css } from "@emotion/react";
import { TEXT } from "shared-style/text";
import { COLOR } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  loginWrapper: css`
    width: 100%;
    padding: 1.25rem 0.5rem 0 0.5rem;
  `,

  mobileDivider: css`
    width: 100%;
  `,

  form: css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `,

  loginButtonWrapper: css``,

  eye: css`
    width: 1rem;
    height: 1rem;
    color: ${COLOR.BLUE300};
  `,

  eyeOff: css`
    width: 1rem;
    height: 1rem;
    color: ${COLOR.GRAY450};
  `,

  findPasswordButtonWrapper: css`
    margin-top: 2.625rem;
  `,

  findPasswordButton: css`
    width: auto;
    height: auto;
    border: none;
    padding: 0;
    background-color: transparent;
    color: ${COLOR.GRAY600};
    ${TEXT.UNDERLINE1_M1620}
  `,

  mobileFooterWrapper: css``,

  mobileDescription: css`
    color: ${COLOR.GRAY600};
  `,

  mobileKakaoButton: css`
    border-radius: 50%;
    background-color: #fee500;
    padding: 0.6875rem 0.625rem 0.5625rem 0.625rem;
  `,

  mobileKakaoLogo: css`
    width: 1.5rem;
    height: 1.5rem;
  `,

  signUpButtonWrapper: css`
    margin-top: 7.625rem;
  `,
};
