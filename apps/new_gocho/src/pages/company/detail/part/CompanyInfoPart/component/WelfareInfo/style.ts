import { css } from "@emotion/react";
import { TEXT } from "shared-style/text";

export const cssObj = {
  welfareWrapper: css`
    margin-top: 0.75rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 3.5rem;
    grid-column-gap: 2.8125rem;
  `,

  itemWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 1.675rem;
  `,

  welfareTitle: css`
    ${TEXT.TITLE4_B1822}
  `,

  welfareDescription: css`
    width: 100%;
    margin-top: 1rem;
    ${TEXT.BODY2_R1624};
  `,
};
