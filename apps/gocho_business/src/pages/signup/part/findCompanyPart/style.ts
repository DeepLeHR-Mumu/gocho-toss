import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  specCardWrapper: css`
    width: 100%;
    min-height: 630px;
    padding: 3rem 3rem 10rem 3rem;
    background-color: ${NEWCOLORS.WHITE};
    border-radius: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,

  formWrapper: css`
    height: 30.5rem;
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
};
