import { css } from "@emotion/react";
import { MOBILE } from "shared-style/mediaQuery";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  signUpWrapper: css`
    width: 100%;
    padding: 1.25rem 0.5rem 0 0.5rem;
    margin-bottom: 18.125rem;

    ${MOBILE} {
      padding: 1rem;
      margin-bottom: 0;
    }
  `,

  form: css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `,

  errorMessage: css`
    color: ${NEWCOLORS.RED300};
    position: absolute;
    bottom: 5rem;
  `,

  signUpButtonWrapper: css`
    ${MOBILE} {
      width: 100%;
      padding: 0 1rem;
      margin-top: 0.75rem;
    }
  `,

  mobileDivider: css`
    display: none;

    ${MOBILE} {
      display: block;
      width: 100%;
    }
  `,
};
