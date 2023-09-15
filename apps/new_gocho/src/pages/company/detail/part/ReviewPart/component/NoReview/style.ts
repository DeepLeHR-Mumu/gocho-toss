import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    justify-content: center;
    align-items: center;
    height: 11rem;
  `,

  text: css`
    ${NEWTEXTS.BODY6}
    color: ${NEWCOLORS.BLUEGRAY400};
    text-align: center;
  `,
};
