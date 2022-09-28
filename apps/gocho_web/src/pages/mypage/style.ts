import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const mainContainer = css`
  margin-top: 4.5rem;
  background-color: #f2f2f6;
  padding: 4rem 0;
`;

export const title = css`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${COLORS.GRAY10};
  margin-bottom: 3rem;
  display: block;
`;

export const colorPoint = css`
  color: ${COLORS.BLUE_FIRST40};
`;

export const mypagePosition = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const mypageBody = css`
  flex-grow: 1;
  width: 100%;
  max-width: calc(100% - 6rem);
`;
