import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  formWrapper: css`
    height: 30.5rem;
  `,

  inputWrapper: css`
    position: relative;
  `,

  inputTitle: css`
    ${TEXTS.TITLE7};
    color: ${NEWCOLORS.BLUEGRAY400};
    margin-bottom: 0.75rem;
  `,

  optionList: (isSearched: boolean) => css`
    display: ${isSearched ? "block" : "none"};
    margin-top: 0.5rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.05);
    max-height: 11.5rem;
    overflow-y: scroll;
  `,

  option: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 2.5rem;
    padding: 0.75rem 1.5rem;
    transition: 0.1s;
    ${TEXTS.TITLE5};

    :hover {
      background-color: ${NEWCOLORS.GRAY100};
    }
  `,
};
