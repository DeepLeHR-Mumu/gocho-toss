import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  partContainer: css`
    position: relative;
    background-color: ${NEWCOLORS.WHITE};
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  backgroundWrapper: css`
    position: relative;
  `,

  imageUploadLabel: (bottom: number, right: number) => css`
    position: absolute;
    bottom: ${bottom}rem;
    right: ${right}rem;
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${NEWCOLORS.GRAY100};
    border-radius: 50%;
    cursor: pointer;
    z-index: 30;

    > svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${NEWCOLORS.BLUEGRAY400};
    }
  `,

  imageUploadInput: css`
    display: none;
  `,

  logoPreviewContainer: css`
    height: 7.5rem;
    position: relative;

    > img {
      border-radius: 1rem 1rem 0 0;
      object-fit: cover;
    }
  `,

  companyInfoWrapper: css`
    position: relative;
    padding: 1.25rem 2rem 2rem;
  `,

  logoBox: css`
    position: absolute;
    left: 2rem;
    top: -3.125rem;
    width: 6.25rem;
    height: 6.25rem;
    background-color: ${NEWCOLORS.WHITE};
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid ${NEWCOLORS.GRAY200};

    > img {
      width: 6rem;
      height: 6rem;
      object-fit: contain;
    }
  `,

  count: css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0 0.5rem;
    margin-bottom: 0.5rem;
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.BLUEGRAY400};

    > svg {
      color: ${NEWCOLORS.BLUEGRAY400};
      font-size: 1.125rem;
    }

    :last-of-type {
      margin-bottom: 0;
    }
  `,

  companyContainer: css`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  `,

  companyName: css`
    ${TEXTS.TITLE11};
  `,

  businessNumber: css`
    margin-left: 1rem;
    ${TEXTS.TITLE3};
    color: ${NEWCOLORS.BLUEGRAY300};

    > span {
      margin-left: 0.5rem;
      color: ${NEWCOLORS.BLUEGRAY500};
    }
  `,

  inputWrapper: css`
    display: flex;
    align-items: center;
    gap: 2rem;
  `,
};
