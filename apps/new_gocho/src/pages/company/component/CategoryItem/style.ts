import { css } from "@emotion/react";
import { TEXT } from "shared-style/text";

export const cssObj = {
  categoryItem: css`
    width: 25%;
    height: 6.5rem;
    margin-bottom: 3.5rem;
  `,

  itemIcon: css`
    width: 4.5rem;
    height: 4.5rem;
    margin: 0 auto 0.5rem;

    > img {
      object-fit: contain;
    }
  `,

  itemText: css`
    ${TEXT.TITLE4_M1822};
    text-align: center;
  `,
};
