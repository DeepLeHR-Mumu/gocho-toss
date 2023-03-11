import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  label: (isFocus: boolean) => css`
    display: flex;
    cursor: pointer;
    align-items: center;
    border: 0.13rem solid ${isFocus ? COLORS.BLUE_FIRST40 : "transparent"};
    border-radius: 0.3125rem;
    padding: 0 0.25rem;
  `,
  radio: css`
    width: 0;
    height: 0;
    margin: 0;

    :focus {
      outline: none;
    }
    :checked ~ div {
      border-color: ${COLORS.BLUE_FIRST40};

      :after {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 0.5625rem;
        height: 0.5625rem;
        background-color: ${COLORS.BLUE_FIRST40};
        border-radius: 50%;
        content: "";
      }
    }
  `,
  radioBox: (isDisabled: boolean) => css`
    border: 2px solid ${isDisabled ? COLORS.GRAY70 : COLORS.GRAY40};
    width: 1.125rem;
    position: relative;
    height: 1.125rem;
    background-color: ${isDisabled ? COLORS.GRAY80 : COLORS.GRAY100};
    border-radius: 50%;
  `,
};
