import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const mapInfo = css`
  padding: 1rem;
`;

export const infoContainer = css`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

export const infoBox = css`
  padding-right: 2.25rem;
`;

export const flexBox = css`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const infoTitle = css`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY60};
  width: 6rem;
  text-align: right;
  margin-right: 1rem;
  white-space: nowrap;
`;

export const info = css`
  word-break: break-all;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: ${COLORS.GRAY10};
  font-weight: 400;
  width: calc(100% - 6rem);
`;

export const pointInfo = css`
  color: ${COLORS.BLUE_NEON50};
`;

export const nozoImage = css`
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 1rem;
  position: relative;
`;
