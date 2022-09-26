import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

interface spinnerContainer {
  (backgroundColor: string): SerializedStyles;
}

export const spinnerContainer: spinnerContainer = (backgroundColor) => {
  return css`
    color: ${COLORS.BLUE_FIRST30};
    font-size: 0.75rem;
    text-indent: -99999em;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10em;
    height: 10em;
    box-shadow: inset 0 0 0 1em;
    transform: translateZ(0) translate(-50%, -50%);
    border-radius: 50%;

    :before {
      border-radius: 50%;
      position: absolute;
      content: "";
      width: 5.2em;
      height: 10.2em;
      background: ${backgroundColor};
      border-radius: 10.2em 0 0 10.2em;
      top: -0.1em;
      left: -0.1em;
      transform-origin: 5.1em 5.1em;
      animation: spinnerAnimation 2s infinite ease 1.5s;
    }
    :after {
      border-radius: 50%;
      position: absolute;
      content: "";
      width: 5.2em;
      height: 10.2em;
      background: ${backgroundColor};
      border-radius: 0 10.2em 10.2em 0;
      top: -0.1em;
      left: 4.9em;
      transform-origin: 0.1em 5.1em;
      animation: spinnerAnimation 2s infinite ease;
    }
    @keyframes spinnerAnimation {
      0% {
        transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  `;
};
