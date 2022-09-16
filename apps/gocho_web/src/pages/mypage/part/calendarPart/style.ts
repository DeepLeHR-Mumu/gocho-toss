import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const container = css`
  min-height: 300px;
  border-radius: 2rem;
  padding: 3rem;
  background-color: ${COLORS.GRAY100};
  margin: 0 0 2rem 1rem;
`;

export const title = css`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.GRAY10};
  margin-bottom: 2.5rem;
`;

export const desc = css`
  font-size: 1rem;
  font-weight: 300;
  color: ${COLORS.GRAY40};
  margin-left: 0.5rem;
`;
