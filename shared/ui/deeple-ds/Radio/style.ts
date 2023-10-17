import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  radio: css`
    position: relative;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid ${COLOR.BLUE300};
    border-radius: 50%;

    ::after {
      content: "";
      position: absolute;
      display: none;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${COLOR.BLUE300};
    }

    :checked {
      ::after {
        display: block;
      }
    }

    :disabled {
      cursor: not-allowed;
      border-color: ${COLOR.GRAY450};

      :after {
        background-color: ${COLOR.GRAY450};
      }
    }
  `,
};
