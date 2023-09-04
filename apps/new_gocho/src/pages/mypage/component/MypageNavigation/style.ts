import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  navigationBox: css`
    display: flex;
    flex-direction: column;
    width: 10.5rem;
    gap: 1.5rem;
  `,

  sideNavigation: css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    ${NEWTEXTS.TITLE7}
  `,
};
