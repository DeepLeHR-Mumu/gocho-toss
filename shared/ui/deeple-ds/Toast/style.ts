import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    width: fit-content;
    padding: 0.75rem 1.25rem;
    border-radius: 0.75rem;
    opacity: 0.65;
    background-color: ${COLOR.BLACK};
    color: ${COLOR.WHITE};
    position: relative;
    top: -17%;
    transform: translate(-50%, 0);
    z-index: 110;

    animation: upAndFadeOut 3.2s forwards cubic-bezier(0.69, 0, 0.23, 1);

    @keyframes upAndFadeOut {
      from {
        top: 10%;
      }
      20% {
        top: -18%;
      }
      30% {
        top: -17%;
      }
    }

    ${NEWTEXTS.TITLE5_M1620}
  `,
};
