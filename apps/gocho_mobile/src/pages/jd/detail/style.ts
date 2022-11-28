import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  background-color: ${COLORS.GRAY90};
`;

export const flexBox = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const containerSkeleton = css`
  width: 100%;
  max-width: 53rem;
  height: 53rem;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 2rem 2rem 0 0;
  position: relative;
`;

export const container = css`
  width: 100%;
  padding: 3rem 1.5rem;
  background-color: ${COLORS.GRAY100};
  box-sizing: border-box;
  border-radius: 2rem;
`;
