import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  label: css`
    display: flex;
    cursor: pointer;
    align-items: center;
  `,
  input: css`
    width: 0;
    height: 0;
    :checked ~ div {
      background-color: ${COLORS.BLUE_FIRST40};
      border: 0;
      > svg {
        color: ${COLORS.GRAY100};
        display: block;
      }
    }
    :focus ~ div {
      outline: 0.125rem solid ${COLORS.BLUE_FIRST40};
      outline-offset: 0.125rem;
    }
  `,
  checkBox: (isDisabled: boolean) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.125rem;
    height: 1.125rem;
    border: 1px solid ${COLORS.GRAY60};
    background-color: ${isDisabled ? COLORS.GRAY90 : COLORS.GRAY100};
    border-radius: 5px;
    margin-right: 0.5rem;

    > svg {
      display: none;
    }
  `,
  desc: css`
    font-size: 0.875rem;
    font-weight: 400;
    color: ${COLORS.GRAY10};
  `,
};
