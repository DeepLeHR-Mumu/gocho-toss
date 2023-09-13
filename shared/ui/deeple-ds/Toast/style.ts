import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    width: fit-content;
    padding: 0.75rem 1.25rem;
    border-radius: 0.75rem;
    opacity: 0.65;
    background-color: ${NEWCOLORS.BLACK};
    color: ${NEWCOLORS.WHITE};
    position: fixed;
    left: 50%;
    top: 80%;
    transform: translate(-50%, -50%);
    z-index: 110;

    animation: upAndFadeOut 3.2s forwards cubic-bezier(0.69, 0, 0.23, 1);

    @keyframes upAndFadeOut {
      from {
        top: 120%;
      }
      20% {
        top: 78%;
      }
      30% {
        top: 80%;
      }
      90% {
      }
      100% {
      }
    }

    ${NEWTEXTS.TITLE7}

    ${MOBILE} {
      ${NEWTEXTS.TITLE4};
    }
  `,
};
