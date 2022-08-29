import { css } from "@emotion/react";

import { COLORS } from "@style/constant";

export const cardListContainer = css`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export const skeletonContainer = css`
  height: 5.4375rem;
  margin-top: 2rem;
  border-radius: 1rem;
  overflow: hidden;
`;

export const descCSS = css`
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 10rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.ERROR_YELLOW20};
`;
