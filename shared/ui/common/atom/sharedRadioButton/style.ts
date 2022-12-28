import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  label: css`
    display: flex;
    cursor: pointer;
    align-items: center;
  `,
  radio: css`
    margin: 0;
    display: none;
    appearance: auto;
    :checked ~ div {
      :after {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 0.625rem;
        height: 0.625rem;
        background-color: ${COLORS.GRAY10};
        border-radius: 50%;
        content: "";
      }
    }
  `,
  radioBox: css`
    border: 2px solid ${COLORS.GRAY10};
    width: 1.125rem;
    position: relative;
    height: 1.125rem;
    background-color: ${COLORS.GRAY100};
    border-radius: 50%;
  `,
};
