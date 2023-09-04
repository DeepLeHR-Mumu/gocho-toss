import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: grid;
    grid-template-columns: 168px 1fr;
    row-gap: 1.5rem;
    column-gap: 1.5rem;
    padding-top: 2.5rem;
  `,

  navBox: css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    ${NEWTEXTS.TITLE7}
  `,

  elementBox: css`
    padding: 2rem;
  `,

  title: css`
    ${NEWTEXTS.TITLE14}
    margin-bottom:2rem;
  `,
};
