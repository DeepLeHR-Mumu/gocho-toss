import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";

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

  form: css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `,

  loginButtonWrapper: css`
    margin-top: 3.375rem;
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
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.UNDERLINE_M1620}
  `,

  signUpButtonWrapper: css`
    margin-top: 7.625rem;
  `,
};
