import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  border-radius: 2rem 2rem 0 0;
  background-color: ${COLORS.GRAY90};
  padding: 4.5rem 0 3.375rem;
`;

export const flexBox = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const containerSkeleton = css`
  width: calc(100% - 18rem);
  height: 53rem;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 2rem 2rem 0 0;
  position: relative;
`;

export const container = css`
  position: relative;
  width: calc(100% - 18rem);
  padding: 3rem 2rem;
  background-color: ${COLORS.GRAY100};
  box-sizing: border-box;
  border-radius: 2rem 2rem 0 0;
`;

export const logoImageBox = css`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  opacity: 0.25;
  z-index: 0;
  width: 15rem;
  height: 2rem;
  margin-left: 0.5rem;
  > img {
    object-fit: contain;
  }
`;
