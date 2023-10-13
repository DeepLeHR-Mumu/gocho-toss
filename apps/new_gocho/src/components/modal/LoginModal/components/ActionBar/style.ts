import { css } from "@emotion/react";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    width: 100%;
    padding: 0 0.5rem 1.5rem 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${TEXT.TITLE4_B1822}
  `,

  title: css`
    ${TEXT.TITLE4_B1822}
  `,

  icon: css`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  `,
};
