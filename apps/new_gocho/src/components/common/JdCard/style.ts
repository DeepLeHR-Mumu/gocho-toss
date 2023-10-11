import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";
import { shorten } from "shared-style/common";
import { TEMP } from "shared-style/mediaQuery";

export const cssObj = {
  cardWrapper: css`
    display: block;
    width: 15.75rem;
    height: 23.125rem;
    flex-shrink: 0;

    ${TEMP} {
      width: 8.75rem;
      height: 15rem;
    }
  `,

  skeletonWrapper: css`
    width: 15.75rem;
    height: 23.125rem;
    flex-shrink: 0;
    border-radius: 1rem;
    overflow: hidden;

    ${TEMP} {
      width: 8.75rem;
      height: 15rem;
    }
  `,

  imageWrapper: css`
    height: 10.875rem;
    border-radius: 1rem;
    border: 1px solid ${COLOR.GRAY200};
    position: relative;

    ${TEMP} {
      height: 6.125rem;
    }

    > img {
      object-fit: contain;
      padding: 1rem;
      cursor: pointer;
    }
  `,

  likeButton: css`
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${TEMP} {
      top: 0.5rem;
      right: 0.5rem;
    }
  `,

  chipContainer: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    margin-top: 1.5rem;

    ${TEMP} {
      margin-top: 0.75rem;
    }
  `,

  eduChip: (isActive: boolean) => css`
    ${NEWTEXTS.TITLE5_B1620}
    width: 1.875rem;
    height: 1.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLOR.GRAY100};
    color: ${isActive ? COLOR.BLUE250 : COLOR.GRAY300};
    border-radius: 0.5rem;

    ${TEMP} {
      width: 1.5rem;
      height: 1.5rem;
      ${NEWTEXTS.TITLE7_M1218}
    }
  `,

  title: css`
    margin-top: 1rem;
    ${NEWTEXTS.TITLE1_B2832};
    ${shorten(2)};
    ${TEMP} {
      ${NEWTEXTS.TITLE6_M1418};
      margin-top: 0.5rem;
    }
  `,

  descWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 0.25rem 0;
    margin-top: 0.5rem;

    ${TEMP} {
      gap: 0.125rem 0;
      margin-top: 0.25rem;
    }
  `,

  desc: css`
    ${NEWTEXTS.TITLE5_M1620};
    color: ${COLOR.GRAY500};

    ${TEMP} {
      ${NEWTEXTS.TITLE7_M1218};
    }
  `,
};
