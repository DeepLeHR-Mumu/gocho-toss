import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cardListContainer = css`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  gap: 1rem;
`;

export const skeletonContainer = css`
  height: 5.4375rem;
  margin-top: 2rem;
  border-radius: 1rem;
  overflow: hidden;
`;

export const descCSS = css`
  text-align: center;
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GRAY90};
  height: 2.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.GRAY60};
  border-radius: 2rem;
`;
