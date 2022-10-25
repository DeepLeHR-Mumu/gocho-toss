import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const noDataBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
`;

export const noDataDesc = css`
  color: ${COLORS.GRAY30};
  font-size: 1rem;
  font-weight: 500;
`;
