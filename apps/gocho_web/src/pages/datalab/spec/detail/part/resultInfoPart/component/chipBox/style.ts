import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  position: relative;
  padding: 0 1.5rem;
  border: 1px solid ${COLORS.GRAY60};
  border-radius: 2rem;
  margin: 0.5rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  color: ${COLORS.GRAY60};
  height: 3rem;
`;

export const numberBox = css`
  font-size: 0.75rem;
  position: absolute;
  top: -0.5rem;
  left: 1rem;
  padding: 0.125rem 0.5rem;
  background-color: #f5f5f5;
  border-radius: 1.5rem;
  color: ${COLORS.BLUE_NEON40};
`;
