import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const buttonBox = css`
  width: 100%;
`;

export const noSearchDataBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GRAY80};
  height: 3.5rem;
  border-radius: 2rem;
  margin-top: 3rem;
`;

export const noSearchDataDesc = css`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.GRAY40};
`;
