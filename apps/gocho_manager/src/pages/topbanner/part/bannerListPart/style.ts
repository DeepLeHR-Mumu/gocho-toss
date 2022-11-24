import { css } from "@emotion/react";
import { shorten } from "shared-style/common";
import { COLORS } from "shared-style/color";

export const sectionContainer = css`
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${COLORS.BLUE_SECOND90};
`;

export const tableTitle = css`
  height: 2rem;
  font-size: 1.25rem;
  padding: 0.5rem;
`;

export const bannerBox = css`
  height: 3rem;
  margin-top: 0.5rem;

  :last-of-type {
    height: auto;
  }
`;

export const bannerIdBox = css`
  width: 10%;
  text-align: center;
`;

export const companyNameBox = css`
  width: 20%;
  text-align: center;
  ${shorten()};
`;

export const titleBox = css`
  width: 40%;
  text-align: center;
  ${shorten()};
`;

export const expireDateBox = css`
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
