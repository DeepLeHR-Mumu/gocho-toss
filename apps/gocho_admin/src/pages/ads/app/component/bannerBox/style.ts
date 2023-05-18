import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const cssObj = {
  bannerBox: css`
    height: 3rem;
    margin-top: 0.5rem;

    :last-of-type {
      height: auto;
    }
  `,

  bannerId: css`
    width: 5%;
    text-align: center;
  `,

  expireDate: css`
    width: 10%;
    text-align: center;
    ${shorten()};
  `,

  pcImage: css`
    width: 5.1rem;
    height: 3rem;
    position: relative;

    > img {
      object-fit: contain;
    }
  `,

  mobileImage: css`
    width: 4rem;
    height: 3rem;
    position: relative;

    > img {
      object-fit: contain;
    }
  `,

  deleteBannerButton: css`
    flex-grow: 1;
    padding: 0.25rem 1rem;
    border: 2px solid ${COLORS.GRAY10};
    background-color: #b32100;
    color: ${COLORS.GRAY100};
  `,
};
