import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  checkbox: css`
    width: 1.125rem;
    height: 1.125rem;
    border: 1.5px solid ${NEWCOLORS.BLUE300};
    border-radius: 0.25rem;

    &:disabled {
      border-color: ${NEWCOLORS.GRAY300};
      cursor: not-allowed;
    }

    &[type="checkbox"]::after {
      border: solid ${NEWCOLORS.WHITE};
      border-width: 0 1px 1px 0;
      content: "";
      display: none;
      height: 8px;
      // left: 40%;
      position: relative;
      top: -2px;
      transform: rotate(45deg);
      width: 4px;
    }

    &[type="checkbox"]:checked {
      background: ${NEWCOLORS.BLUE300};
    }

    &[type="checkbox"]:checked:disabled {
      background: ${NEWCOLORS.GRAY300};
    }

    &[type="checkbox"]:checked::after {
      display: block;
    }
  `,
};
