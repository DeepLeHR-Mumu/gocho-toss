import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  menuWrapper: css`
    display: flex;
    margin: 2rem 0;
    gap: 1rem;
    align-items: center;

    button {
      width: 4rem;
      height: 2.875rem;
      padding: 1rem 0.75rem;
      line-height: 1.375rem;
      font-size: 1.125rem;
    }
  `,

  selectedButton: css`
    color: ${NEWCOLORS.WHITE};
    border-radius: 1.5rem;
    background: ${NEWCOLORS.BLACK};
  `,

  defaultButton: css`
    color: ${NEWCOLORS.BLUEGRAY400};
    background: ${NEWCOLORS.WHITE};
  `,

  listWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
};
