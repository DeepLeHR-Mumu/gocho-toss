import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const controlWrapper = css`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.25);
  padding: 0.75rem;
  border-radius: 2rem;
`;

export const counter = css`
  color: ${COLORS.GRAY100};
  font-size: 0.875rem;
  padding: 0 1rem;
  font-weight: 400;
`;

export const buttonCSS = css`
  font-size: 1rem;
  color: ${COLORS.GRAY100};
`;
