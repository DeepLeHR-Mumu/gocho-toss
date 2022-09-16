import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const title = css`
  font-size: 1.75rem;
  font-weight: 700;
  padding: 6rem 0 3.5rem;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_NEON30};
`;

export const flexBox = css`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
