import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  background: css`
    background-color: ${NEWCOLORS.GRAY100};
  `,

  contentsWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    padding-top: 2.5rem;
  `,

  mainContentsWrapper: css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `,

  sideContentsWrapper: css`
    flex-basis: 10.5rem;
    flex-shrink: 0;
  `,
};
