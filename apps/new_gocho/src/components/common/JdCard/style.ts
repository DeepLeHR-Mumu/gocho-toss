import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";
import { shorten } from "shared-style/common";

export const cssObj = {
  cardWrapper: css`
    display: block;
    width: 15.75rem;
    height: 23.125rem;
    flex-shrink: 0;
  `,

  skeletonWrapper: css`
    width: 15.75rem;
    height: 23.125rem;
    flex-shrink: 0;
    border-radius: 1rem;
    overflow: hidden;
  `,

  imageWrapper: css`
    height: 10.875rem;
    border-radius: 1rem;
    border: 1px solid ${COLOR.GRAY200};
    position: relative;

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
  `,

  chipContainer: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    margin-top: 1.5rem;
  `,

  eduChip: (isActive: boolean) => css`
    ${TEXT.TITLE5_B1620}
    width: 1.875rem;
    height: 1.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLOR.GRAY100};
    color: ${isActive ? COLOR.BLUE250 : COLOR.GRAY300};
    border-radius: 0.5rem;
  `,

  title: css`
    margin-top: 1rem;
    ${TEXT.TITLE1_B2832};
    ${shorten(2)};
  `,

  descWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 0.25rem 0;
    margin-top: 0.5rem;
  `,

  desc: css`
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.GRAY500};
  `,
};
