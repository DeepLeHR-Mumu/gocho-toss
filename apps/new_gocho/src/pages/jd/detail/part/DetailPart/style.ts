import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    flex-grow: 1;
  `,

  container: css`
    border-radius: 1rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    background-color: ${NEWCOLORS.WHITE};
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 4rem;
  `,

  placeWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  `,

  factoryWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,

  factoryName: css`
    color: ${NEWCOLORS.BLACK};
    ${NEWTEXTS.TITLE12}
  `,

  rightIcon: css`
    width: 1.25rem;
    height: 1.25rem;
    color: ${NEWCOLORS.GRAY300};
    margin-left: 0.5rem;
  `,

  factoryAddress: css`
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.TITLE10}
  `,
};
