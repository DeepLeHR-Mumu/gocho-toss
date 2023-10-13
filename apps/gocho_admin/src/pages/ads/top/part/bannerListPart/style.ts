import { css } from "@emotion/react";
import { shorten } from "shared-style/common";
import { COLOR } from "shared-style/color";

export const sectionContainer = css`
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${COLOR.BLUE50};
`;

export const tableTitle = css`
  height: 2rem;
  font-size: 1.25rem;
  padding: 0.5rem;
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
