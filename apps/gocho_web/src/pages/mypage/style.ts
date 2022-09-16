import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const mainContainer = css`
  background-color: #f2f2f6;
  padding: 4rem 0;
`;

export const title = css`
  font-size: 2rem;
  font-weight: 600;
  color: ${COLORS.GRAY10};
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
`;

export const mypagePosition = css`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const mypageBody = css`
  flex-grow: 1;
`;
