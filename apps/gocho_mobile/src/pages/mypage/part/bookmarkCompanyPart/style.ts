import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const emptyBox = css`
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const warningCSS = css`
  text-align: center;
  padding: 1rem;
  width: 100%;
  line-height: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GRAY90};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.GRAY60};
  border-radius: 3rem;
`;
