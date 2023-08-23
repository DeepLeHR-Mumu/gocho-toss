import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";
import { shorten } from "shared-style/common";

export const cssObj = {
  cardWrapper: css`
    width: 15.75rem;
    height: 23.125rem;
  `,

  imageWrapper: css`
    height: 10.875rem;
    border-radius: 1rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    position: relative;

    > img {
      object-fit: contain;
      padding: 1rem;
    }
  `,

  chipContainer: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    margin-top: 1.5rem;
  `,

  eduChip: (isActive: boolean) => {
    return css`
      ${NEWTEXTS.TITLE9}
      width: 1.875rem;
      height: 1.875rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${NEWCOLORS.GRAY100};
      color: ${isActive ? NEWCOLORS.BLUE250 : NEWCOLORS.BLUEGRAY100};
      border-radius: 0.5rem;
    `;
  },

  title: css`
    margin-top: 1rem;
    ${NEWTEXTS.BODY8};
    ${shorten(2)};
  `,

  desc: css`
    ${NEWTEXTS.TITLE7};
    margin-top: 0.5rem;
    color: ${NEWCOLORS.BLUEGRAY300};
  `,
};
