import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

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
  `,

  form: css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `,

  errorMessage: css`
    color: ${COLOR.RED300};
    position: absolute;
    bottom: 5rem;
  `,

  signUpButtonWrapper: css``,

  mobileDivider: css`
    display: none;
  `,
};
