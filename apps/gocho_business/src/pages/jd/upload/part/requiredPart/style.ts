import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  selectedCertiContainer: css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0 1rem;
  `,

  certiLabel: css`
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 0.75rem 1rem;
    border-radius: 1.5rem;
    background-color: ${NEWCOLORS.BLUE100};
    color: ${NEWCOLORS.BLUE300};
  `,

  smallDeleteButton: css`
    cursor: pointer;
    > svg {
      width: 1.25rem;
      height: 1.25rem;
    }
    color: ${NEWCOLORS.BLUE300};
  `,
};
