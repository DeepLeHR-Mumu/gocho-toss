import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const cardWrapper = css`
  width: 49.5%;
  height: 16rem;
  border-radius: 1.5rem;
  margin-bottom: 1rem;
  padding: 1.5rem;
  background-color: ${COLORS.GRAY100};
`;

export const tempFlex = css`
  display: flex;
`;

export const companyLogoBox = css`
  width: 7.5rem;
  height: 7.5rem;
  position: relative;
`;

export const dateInfoContainer = css`
  display: flex;
  align-items: center;
`;

export const date = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY40};
`;

export const companyName = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY40};
`;

export const titleCSS = css`
  font-size: 1rem;
  font-weight: 500;
`;

export const detailInfoContainer = css`
  display: flex;
`;
