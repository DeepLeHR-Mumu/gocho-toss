import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const tipPartWrapper = css`
  margin-top: 10.25rem;
`;

export const title = css`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.GRAY10};
  margin-bottom: 2.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const tipLatestArrWrapper = css`
  padding: 0 2rem;
  box-sizing: border-box;
  margin-top: 3.4375rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
