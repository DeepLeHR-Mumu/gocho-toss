import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  wrapper: (size: number, gap: number) => css`
    line-height: ${size}rem;

    > div {
      display: inline-block;
      background-color: ${COLOR.BLUE100};
      width: ${size}rem;
      height: ${size}rem;
      border-radius: ${size}rem;
      animation-name: blink;
      animation-duration: 1.4s;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
      margin-right: ${gap}rem;
    }

    > div:nth-child(2) {
      animation-delay: 0.2s;
    }

    > div:nth-child(3) {
      margin-right: 0;
      animation-delay: 0.4s;
    }

    @keyframes blink {
      0% {
        background-color: ${COLOR.BLUE300};
      }
      70% {
        background-color: ${COLOR.BLUE200};
      }
      100% {
        background-color: ${COLOR.BLUE100};
      }
    }
  `,
};
