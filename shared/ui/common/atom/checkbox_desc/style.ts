import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  label: css`
    display: flex;
    cursor: pointer;
    align-items: center;
  `,
  input: css`
    margin: 0;
    display: none;
    :checked ~ div {
      > svg {
        color: ${COLORS.BLUE_FIRST40};
        display: block;
      }
    }
  `,
  checkBox: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.125rem;
    height: 1.125rem;
    border: 1px solid ${COLORS.GRAY60};
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
