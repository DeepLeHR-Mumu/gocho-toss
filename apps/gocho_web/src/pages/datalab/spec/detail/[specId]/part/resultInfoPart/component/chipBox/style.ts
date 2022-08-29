import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const wrapper = css`
  position: relative;
  padding: 0.875rem 1.5rem;
  border: 1px solid ${COLORS.GRAY60};
  border-radius: 1.5rem;
  margin: 0.5625rem;
  font-size: 0.875rem;
  width: fit-content;
  flex-grow: 0;
  flex-shrink: 0;
  color: ${COLORS.GRAY60};
`;

export const numberBox = css`
  font-size: 0.75rem;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.2rem 0.5rem;
  background-color: #f5f5f5;
  border-radius: 1.5rem;
  transform: translate(40%, -50%);
  color: ${COLORS.BLUE_NEON40};
`;
