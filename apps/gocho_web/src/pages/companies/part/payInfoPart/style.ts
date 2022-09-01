import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const infoContainer = css`
  padding: 1rem 2rem;
`;

export const flexBox = css`
  display: flex;
  align-items: center;
`;

export const infoBox = css`
  width: 50%;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

export const infoPicture = css`
  width: 7rem;
  height: 7rem;
  margin: 0 auto;
  position: relative;
`;

export const infoTitle = css`
  font-size: 0.875rem;
  width: 9rem;
  margin-top: 0.25rem;
  padding: 0.75rem;
  background-color: ${COLORS.GRAY100};
  color: ${COLORS.BLUE_NEON50};
  text-align: center;
  border-radius: 1.5rem;
  box-shadow: 0 2px 8px 0 #7b7b7b33;
  z-index: 10;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
  margin-right: 0.25rem;
  font-weight: 700;
`;

export const infoText = css`
  font-size: 1.375rem;
  font-weight: 400;
  margin-left: 1rem;
`;

export const etcTitle = css`
  font-size: 0.875rem;
  width: 9rem;
  padding: 0.75rem;
  background-color: ${COLORS.GRAY100};
  color: ${COLORS.GRAY60};
  text-align: center;
  border-radius: 1.5rem;
  box-shadow: 0 2px 8px 0 #7b7b7b33;
  z-index: 10;
`;

export const noData = css`
  color: ${COLORS.GRAY60};
  margin-left: 1rem;
`;
