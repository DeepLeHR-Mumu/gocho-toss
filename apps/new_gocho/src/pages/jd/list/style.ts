import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { COLOR } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    padding-top: 2.5rem;
  `,

  titleWrapper: css`
    display: inline-flex;
    align-items: center;
    margin-bottom: 2rem;

    > h3 {
      ${NEWTEXTS.DISPLAY1_B4044}
    }

    > span {
      margin-left: 1.75rem;
      color: ${COLOR.GRAY600};
      ${NEWTEXTS.TITLE4_M1822}
    }
  `,

  dropDownWrapper: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 1.5rem;
    margin-top: 3.5rem;
  `,

  iconButton: (clicked: boolean) => css`
    border-radius: 0.5rem;
    padding: 0.25rem;
    background-color: ${clicked ? COLOR.GRAY100 : "transparent"};
    margin-left: 1.875rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${clicked ? COLOR.BLACK : COLOR.GRAY450};
    }
  `,

  jdGridWrapper: css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 4rem;
    column-gap: 1.5rem;
    margin-bottom: 10rem;
  `,

  jdListWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 5rem;
  `,

  paginationWrapper: css`
    display: grid;
    place-items: center;
  `,
};
