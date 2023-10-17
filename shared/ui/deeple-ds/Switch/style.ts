import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  switchWrapper: css`
    span {
      display: block;
      width: 3rem;
      height: 1.5rem;
      background-color: ${COLOR.GRAY200};
      border-radius: 1.5rem;
      position: relative;
      cursor: pointer;
      -webkit-transition: 0.4s;
      transition: 0.4s;

      ::before {
        content: "";
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 1.25rem;
        position: absolute;
        top: 0.125rem;
        left: 0.125rem;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        background: ${COLOR.WHITE};
        box-shadow: 0 0 3px ${COLOR.GRAY450};
      }
    }

    input {
      display: hidden;
    }

    input:checked + span::before {
      -webkit-transition: 0.4s;
      transition: 0.4s;
      transform: translateX(24px);
      box-shadow: 0 0 3px ${COLOR.BLACK};
    }

    input:checked + span {
      -webkit-transition: 0.4s;
      transition: 0.4s;
      background-color: ${COLOR.BLUE300};
    }

    input:disabled + span::before {
      box-shadow: 0 0 3px ${COLOR.GRAY450};
    }

    input:disabled + span {
      cursor: not-allowed;
      background-color: ${COLOR.GRAY200};
    }
  `,
};
