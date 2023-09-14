import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  categoryItem: css`
    height: 6.5rem;
  `,

  itemIcon: css`
    width: 4.5rem;
    height: 4.5rem;
    margin-bottom: 0.5rem;

    > img {
      object-fit: contain;
    }
  `,

  itemText: css`
    ${NEWTEXTS.TITLE11};
    text-align: center;
  `,
};
