import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const mapInfo = css`
  padding: 1rem;
`;

export const infoContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

export const flexBox = css`
  display: flex;
  align-items: center;
  margin: 0 3rem 1.5rem 0;
`;

export const infoTitle = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY60};
  width: 6rem;
  text-align: right;
  margin-right: 1rem;
`;

export const info = css`
  flex-grow: 1;
`;

export const mapView = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 20rem;
`;
