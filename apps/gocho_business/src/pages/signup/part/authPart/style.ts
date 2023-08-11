import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  formWrapper: css`
    height: 30.5rem;
  `,

  authWrapper: css`
    border-radius: 1rem;
    padding: 1.25rem 1rem;
    margin-bottom: 2rem;
    border: 1px solid ${NEWCOLORS.BLUE200};
    background-color: ${NEWCOLORS.BLUE50};
  `,

  authLink: css`
    ${TEXTS.TITLE9};
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    width: 100%;
    margin-bottom: 1rem;
  `,

  icon: css`
    display: flex;
    align-items: center;
    color: ${NEWCOLORS.BLUE200};
  `,

  desc: css`
    color: ${NEWCOLORS.BLUEGRAY400};
    ${TEXTS.BODY2};
  `,

  inputWrapper: css`
    position: relative;
    margin-bottom: 2rem;
  `,

  inputTitle: css`
    ${TEXTS.TITLE7};
    color: ${NEWCOLORS.BLUEGRAY400};
    margin-bottom: 0.75rem;
  `,

  termBox: css`
    ${TEXTS.TITLE6};
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    margin-bottom: 0.75rem;
  `,

  termLink: css`
    color: ${NEWCOLORS.BLUEGRAY400};
    text-decoration: underline;
  `,

  errorMessage: css`
    ${TEXTS.BODY3};
    color: ${NEWCOLORS.RED300};
    margin-top: 1.5rem;
    text-align: center;
  `,
};
