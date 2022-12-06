import { css } from "@emotion/react";
import { shorten } from "shared-style/common";
import { COLORS } from "shared-style/color";

export const sectionContainer = css`
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${COLORS.BLUE_SECOND90};
`;

export const titleBox = css`
  height: 2rem;
  font-size: 1.25rem;
  padding: 0.5rem;
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
