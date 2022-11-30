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
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  margin-bottom: 3rem;
  gap: 1rem;
`;

export const infoBox = css`
  width: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const infoPicture = css`
  width: 7rem;
  height: 7rem;
  position: relative;
`;

export const infoTitle = css`
  font-size: 0.875rem;
  width: 9rem;
  height: 2.25rem;
  background-color: ${COLORS.GRAY100};
  color: ${COLORS.BLUE_NEON50};
  text-align: center;
  border-radius: 2rem;
  box-shadow: 0 2px 8px 0 #7b7b7b33;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const textBox = css`
  width: 100%;
  background-color: ${COLORS.GRAY90};
  border-radius: 2rem 0 2rem 2rem;
  padding: 1rem;
  margin-top: -0.25rem;
  list-style: disc;
`;

export const infoText = css`
  margin-left: 1rem;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.8;
`;
