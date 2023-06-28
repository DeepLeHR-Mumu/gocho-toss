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
    //height: auto;
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
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  `,

  title: css`
    ${TEXTS.TITLE11};
    display: block;
  `,

  closeButton: css`
    > svg {
      width: 2rem;
      height: 2rem;
    }
  `,

  inputWrapper: css`
    display: flex;
    align-items: center;
    gap: 0 1rem;
    margin-right: 2.5rem;
  `,

  labelContainer: css`
    display: flex;
    align-items: center;
    gap: 0 2rem;
    margin-bottom: 1.25rem;
  `,

  radioLabel: css`
    margin-left: 0.5rem;
  `,

  buttonContainer: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0 1rem;
  `,
};
