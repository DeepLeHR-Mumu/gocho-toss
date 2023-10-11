import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";

export const cssObj = {
  label: (isFocus: boolean) => css`
    display: flex;
    cursor: pointer;
    align-items: center;
    border: 0.13rem solid ${isFocus ? COLOR.BLUE300 : "transparent"};
    border-radius: 0.3125rem;
    padding: 0 0.25rem;
  `,
  radio: css`
    width: 0;
    height: 0;
    margin: 0;

    :checked ~ div {
      border-color: ${COLOR.BLUE300};

      :after {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 0.75rem;
        height: 0.75rem;
        background-color: ${COLOR.BLUE300};
        border-radius: 50%;
        content: "";
      }
    }
  `,
  radioBox: (isDisabled: boolean) => css`
    border: 1.5px solid ${isDisabled ? COLOR.GRAY300 : COLOR.GRAY600};
    width: 1.25rem;
    position: relative;
    height: 1.25rem;
    background-color: ${isDisabled ? COLOR.GRAY100 : COLOR.WHITE};
    border-radius: 50%;
  `,
};
