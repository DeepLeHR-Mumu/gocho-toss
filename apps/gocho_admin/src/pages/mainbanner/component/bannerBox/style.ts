import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const bannerBox = css`
  height: 3rem;
  margin-top: 0.5rem;

  :last-of-type {
    height: auto;
  }
`;

export const bannerId = css`
  width: 10%;
  text-align: center;
`;

export const companyName = css`
  width: 20%;
  text-align: center;
  ${shorten()};
`;

export const title = css`
  width: 40%;
  text-align: center;
  ${shorten()};
`;

export const expireDate = css`
  width: 20%;
  text-align: center;
  ${shorten()};
`;

export const deleteBannerButton = css`
  flex-grow: 1;
  padding: 0.25rem 1rem;
  border: 2px solid ${COLORS.GRAY10};
  background-color: #b32100;
  color: ${COLORS.GRAY100};
`;
