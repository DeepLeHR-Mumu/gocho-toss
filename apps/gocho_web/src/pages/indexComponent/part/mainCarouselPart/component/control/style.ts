import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const controlWrapper = css`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const counter = css`
  color: ${COLORS.GRAY100};
  font-size: 0.875rem;
  padding: 0 1rem;
`;
