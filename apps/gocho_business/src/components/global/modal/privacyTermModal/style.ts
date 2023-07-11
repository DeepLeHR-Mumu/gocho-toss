import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  modalContainer: css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 80;
    width: 50rem;
    padding: 2rem;
    background-color: ${NEWCOLORS.WHITE};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    outline: none;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  titleWrapper: css`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  `,

  title: css`
    ${TEXTS.TITLE9};
    display: block;
  `,

  closeButton: css`
    position: absolute;
    top: -0.25rem;
    right: -0.25rem;

    > svg {
      color: ${NEWCOLORS.GRAY300};
      width: 2rem;
      height: 2rem;
    }
  `,

  content: css`
    max-height: 50vh;
    overflow-y: scroll;
  `,
};
