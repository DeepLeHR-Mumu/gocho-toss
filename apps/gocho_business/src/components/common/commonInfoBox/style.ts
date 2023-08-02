import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  viewInfoBox: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 9.25rem;
    height: 4rem;
    border-right: 1px solid ${NEWCOLORS.GRAY200};

    :last-of-type {
      border-right: none;
    }
  `,

  countName: css``,

  count: css`
    font-size: 1.5rem;
    font-weight: 600;
  `,
};
