import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  checkbox: css`
    width: 1.125rem;
    height: 1.125rem;
    border: 1.5px solid ${COLOR.GRAY450};
    border-radius: 0.25rem;
    margin: 0;

    &:disabled {
      border-color: ${COLOR.GRAY200};
      cursor: not-allowed;
    }

    &[type="checkbox"]::after {
      border: solid ${COLOR.WHITE};
      border-width: 0 1px 1px 0;
      content: "";
      display: none;
      height: 8px;
      position: relative;
      top: -2px;
      transform: rotate(45deg);
      width: 4px;
    }

    &[type="checkbox"]:checked {
      background: ${COLOR.BLUE300};
      border-color: ${COLOR.BLUE300};
    }

    &[type="checkbox"]:checked:disabled {
      background: ${COLOR.GRAY200};
    }

    &[type="checkbox"]:checked::after {
      display: block;
    }
  `,
};
