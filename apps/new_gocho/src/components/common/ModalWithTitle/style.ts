import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: (width: number) => css`
    width: ${width}rem;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1.25rem;
    padding: 2rem;
    background-color: ${NEWCOLORS.WHITE};
    overflow: auto;
  `,

  header: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  title: css`
    color: ${NEWCOLORS.BLACK};
    ${NEWTEXTS.TITLE14}
  `,

  close: css`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  `,

  divider: css`
    margin: 1.25rem 0;
  `,
};
