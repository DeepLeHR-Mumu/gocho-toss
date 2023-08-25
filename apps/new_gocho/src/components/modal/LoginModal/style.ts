import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  wrapper: css`
    width: 28.5rem;
    height: 41.125rem;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1.25rem;
    padding: 1.5rem;
    background-color: ${NEWCOLORS.WHITE};
    overflow: auto;

    ${MOBILE} {
      width: 100%;
      height: 100%;
      border-radius: 0;
      padding: 0;
    }
  `,
};
