import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  partContainer: css`
    position: relative;
    background-color: ${COLOR.WHITE};
    border: 1px solid ${COLOR.GRAY200};
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
    background-color: ${COLOR.GRAY100};
    border-radius: 50%;
    cursor: pointer;
    z-index: 30;

    > svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${COLOR.GRAY600};
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
    background-color: ${COLOR.WHITE};
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid ${COLOR.GRAY200};

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
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.GRAY600};

    > svg {
      color: ${COLOR.GRAY600};
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
    ${TEXT.TITLE1_B2832};
  `,

  businessNumber: css`
    margin-left: 1rem;
    ${TEXT.TITLE6_M1418};
    color: ${COLOR.GRAY500};

    > span {
      margin-left: 0.5rem;
      color: ${COLOR.GRAY700};
    }
  `,

  inputWrapper: css`
    display: flex;
    align-items: center;
    gap: 2rem;
  `,
};
