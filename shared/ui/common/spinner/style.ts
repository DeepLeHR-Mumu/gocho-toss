import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${COLOR.WHITE};
  `,
  container: css`
    z-index: 60;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: ${COLOR.WHITE};
  `,
  spinner: css`
    color: ${COLOR.BLUE300};
    font-size: 0.75rem;
    text-indent: -99999em;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 5em;
    height: 5em;
    box-shadow: inset 0 0 0 0.35em;
    transform: translateZ(0) translate(-50%, -50%);
    border-radius: 50%;

    :before {
      border-radius: 50%;
      position: absolute;
      content: "";
      width: 4em;
      height: 6em;
      background: ${COLOR.WHITE};
      border-radius: 5.5em 0 0 5.5em;
      top: -0.5em;
      left: -0.5em;
      transform-origin: 3em;
      animation: spinnerAnimation 2s infinite ease 1.5s;
    }
    :after {
      border-radius: 50%;
      position: absolute;
      content: "";
      width: 4em;
      height: 6em;
      background: ${COLOR.WHITE};
      border-radius: 0 5em 5em 0;
      top: -0.5em;
      left: 2.5em;
      transform-origin: 0em 3em;
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
  `,
};
