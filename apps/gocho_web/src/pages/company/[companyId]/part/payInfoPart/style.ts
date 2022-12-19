import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  background-color: ${COLORS.GRAY100};
  border-radius: 2rem;
  margin-bottom: 6rem;

  :last-of-type {
    margin-bottom: 2.25rem;
  }
`;

export const infoContainer = css`
  padding: 2rem;
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
  font-weight: 700;
  height: 2.25rem;
  margin-top: 0.25rem;
  text-align: center;
  background-color: ${COLORS.GRAY100};
  color: ${COLORS.BLUE_NEON50};
  border-radius: 2rem;
  box-shadow: 0 2px 8px 0 #7b7b7b33;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
  margin-right: 0.25rem;
  font-weight: 700;
`;

export const infoText = css`
  font-size: 1rem;
  font-weight: 400;
  margin-left: 1rem;
  white-space: pre-line;
  line-height: 1.8;
  width: calc(100% - 10rem);
  color: ${COLORS.GRAY10};
`;

export const etcTitle = css`
  font-size: 0.875rem;
  width: 9rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GRAY100};
  color: ${COLORS.GRAY60};
  text-align: center;
  border-radius: 2rem;
  box-shadow: 0 2px 8px 0 #7b7b7b33;
  z-index: 10;
  font-weight: 700;
`;

export const noData = css`
  background-color: ${COLORS.GRAY90};
  width: 10rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: ${COLORS.GRAY60};
  border-radius: 2rem;
  margin-left: 1rem;
`;
