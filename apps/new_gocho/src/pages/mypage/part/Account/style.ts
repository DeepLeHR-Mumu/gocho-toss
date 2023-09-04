import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `,

  title: css`
    ${NEWTEXTS.TITLE14}
  `,

  contentWrapper: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,

  userTextWrapper: css`
    display: flex;
    flex-direction: column;
  `,
};
