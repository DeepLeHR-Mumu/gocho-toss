import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    margin-top: 1.5rem;
  `,

  dropDownWrapper: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 1.5rem;
  `,

  jdGridWrapper: css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 4rem;
    column-gap: 1.5rem;
    margin-bottom: 7.5rem;
  `,

  jdListWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 5rem;
  `,

  listButton: css`
    border-radius: 0.5rem;
    padding: 0.25rem;
    background-color: ${NEWCOLORS.GRAY100};
    margin-left: 1.875rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${NEWCOLORS.BLACK};
    }
  `,

  gridButton: css`
    border-radius: 0.5rem;
    padding: 0.25rem;
    margin-left: 1rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${NEWCOLORS.GRAY300};
    }
  `,

  iconButton: (clicked: boolean) => css`
    border-radius: 0.5rem;
    padding: 0.25rem;
    background-color: ${clicked ? NEWCOLORS.GRAY100 : "transparent"};
    margin-left: 1.875rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${clicked ? NEWCOLORS.BLACK : NEWCOLORS.GRAY300};
    }
  `,

  paginationWrapper: css`
    display: flex;
    justify-content: center;
    margin-bottom: 7.5rem;
  `,
};