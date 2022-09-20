import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const infoContainer = css`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  gap: 0.5rem;
`;

export const infoBox = css`
  width: 23.5%;
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
  padding: 0.75rem;
  background-color: ${COLORS.GRAY100};
  color: ${COLORS.BLUE_NEON50};
  text-align: center;
  border-radius: 1.5rem;
  box-shadow: 0 2px 8px 0 #7b7b7b33;
  z-index: 10;
`;

export const textBox = css`
  width: 95%;
  background-color: ${COLORS.GRAY90};
  border-radius: 1.5rem 0 1.5rem 1.5rem;
  padding: 1.25rem 1rem 1rem;
  margin-top: -0.25rem;
`;

export const infoText = css`
  :before {
    content: " ·   ";
  }

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 0.25rem;
`;
