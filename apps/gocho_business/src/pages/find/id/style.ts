import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  sectionContainer: css`
    width: fit-content;
    background-color: ${NEWCOLORS.WHITE};
    margin: 6rem auto;
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  titleContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.75rem;
  `,

  backIcon: css`
    > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  `,

  closeIcon: css`
    > svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${NEWCOLORS.GRAY300};
    }
  `,

  title: css`
    ${TEXTS.TITLE9};
  `,

  inputBox: css`
    position: relative;
    margin-bottom: 2rem;
  `,

  inputTitle: css`
    ${TEXTS.TITLE7};
    color: ${NEWCOLORS.BLUEGRAY400};
    margin-bottom: 0.75rem;
  `,

  errorMsg: css`
    font-size: 1rem;
    height: 1rem;
    margin: 3rem 0;
    text-align: center;
    line-height: 1;
    display: block;
    color: ${NEWCOLORS.RED300};
    font-weight: 400;
  `,
};
