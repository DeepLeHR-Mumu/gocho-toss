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
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  `,

  title: css`
    ${TEXTS.TITLE14};
    display: block;
  `,

  divider: css`
    width: 100%;
    margin: 1.25rem 0;
    border-color: ${NEWCOLORS.GRAY200};
    border-style: solid;
  `,

  buttonContainer: css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    gap: 0 1rem;
    margin-top: 1.25rem;

    & > button {
      height: 3rem;
    }
  `,
};
