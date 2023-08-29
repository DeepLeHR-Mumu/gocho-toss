import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";

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

    ${MOBILE} {
      padding: 1rem;
    }
  `,

  mobileDivider: css`
    width: 100%;
  `,

  form: css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    ${MOBILE} {
      gap: 1.75rem;
    }
  `,

  loginButtonWrapper: css`
    margin-top: 3.375rem;

    ${MOBILE} {
      width: 100%;
      padding: 0 1rem;
      margin-top: 0.75rem;
    }
  `,

  eye: css`
    width: 1rem;
    height: 1rem;
    color: ${NEWCOLORS.BLUE300};
  `,

  eyeOff: css`
    width: 1rem;
    height: 1rem;
    color: ${NEWCOLORS.GRAY300};
  `,

  findPasswordButtonWrapper: css`
    margin-top: 2.625rem;

    ${MOBILE} {
      margin-top: 1.75rem;
    }
  `,

  findPasswordButton: css`
    width: auto;
    height: auto;
    border: none;
    padding: 0;
    background-color: transparent;
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.UNDERLINE_M1620}

    ${MOBILE} {
      ${NEWTEXTS.UNDERLINE_M1418}
    }
  `,

  mobileFooterWrapper: css`
    ${MOBILE} {
      margin-top: auto;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      align-items: center;
      width: 100%;
      padding: 0 1rem 1rem 1rem;
    }
  `,

  mobileDescription: css`
    color: ${NEWCOLORS.BLUEGRAY400};
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

    ${MOBILE} {
      width: 100%;
      margin-top: 0;
    }
  `,
};