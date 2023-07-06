import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  mainContainer: css`
    display: flex;
    height: 100vh;
  `,

  backgroundWrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
    ${TEXTS.TITLE13};
    width: 50rem;
  `,

  loginWrapper: css`
    width: fit-content;
    background-color: ${NEWCOLORS.WHITE};
    margin: auto;
    padding: 3rem 1.5rem 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  logoBox: css`
    position: relative;
    width: 15rem;
    height: 2rem;
    margin: 0 auto 2rem;

    > img {
      object-fit: contain;
    }
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

  eyeButtonCSS: css`
    z-index: 10;
    font-size: 1.5rem;
    color: ${NEWCOLORS.GRAY200};
    position: absolute;
    top: 2.875rem;
    right: 1rem;
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

  bottomBox: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  buttonContainer: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
  `,

  findButton: css`
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.BLUEGRAY400};
  `,

  contour: css`
    :after {
      content: "|";
      color: ${NEWCOLORS.GRAY200};
    }
  `,

  buttonDivider: css`
    margin-top: 1.25rem;
  `,
};
