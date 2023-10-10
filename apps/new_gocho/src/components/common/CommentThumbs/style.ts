import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  thumbsUpWrapper: (isClicked: boolean) => css`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: ${isClicked ? NEWCOLORS.BLUE300 : NEWCOLORS.BLUEGRAY400};

    svg {
      color: ${isClicked ? NEWCOLORS.BLUE300 : NEWCOLORS.BLUEGRAY400};
    }
  `,

  thumbsDownWrapper: (isClicked: boolean) => css`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: ${isClicked ? NEWCOLORS.RED200 : NEWCOLORS.BLUEGRAY400};

    svg {
      color: ${isClicked ? NEWCOLORS.RED200 : NEWCOLORS.BLUEGRAY400};
    }
  `,

  large: css`
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    span {
      ${NEWTEXTS.TITLE5_M1620}
    }
  `,

  small: css`
    svg {
      width: 1rem;
      height: 1rem;
    }

    span {
      ${NEWTEXTS.TITLE7_M1218}
    }
  `,
};
