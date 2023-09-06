import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
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

  highlightMenu: css`
    font-size: 1rem;
    font-weight: 700;
    color: ${NEWCOLORS.BLUE300};
  `,
};
