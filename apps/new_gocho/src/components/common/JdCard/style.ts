import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";
import { shorten } from "shared-style/common";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  cardWrapper: css`
    width: 15.75rem;
    height: 23.125rem;
    flex-shrink: 0;

    ${MOBILE} {
      width: 8.75rem;
      height: 15rem;
    }
  `,

  imageWrapper: css`
    height: 10.875rem;
    border-radius: 1rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    position: relative;

    ${MOBILE} {
      height: 6.125rem;
    }

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

    ${MOBILE} {
      margin-top: 0.75rem;
    }
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

      ${MOBILE} {
        width: 1.5rem;
        height: 1.5rem;
        ${NEWTEXTS.TITLE3}
      }
    `;
  },

  title: css`
    margin-top: 1rem;
    ${NEWTEXTS.BODY8};
    ${shorten(2)};
    ${MOBILE} {
      ${NEWTEXTS.TITLE5};
      margin-top: 0.5rem;
    }
  `,

  descWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 0.25rem 0;
    margin-top: 0.5rem;

    ${MOBILE} {
      gap: 0.125rem 0;
      margin-top: 0.25rem;
    }
  `,

  desc: css`
    ${NEWTEXTS.TITLE7};
    color: ${NEWCOLORS.BLUEGRAY300};

    ${MOBILE} {
      ${NEWTEXTS.TITLE1};
    }
  `,
};
