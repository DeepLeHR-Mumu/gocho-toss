import { css } from "@emotion/react";

export const skeletonContainer = css`
  overflow: hidden;
  height: 13rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem rgba(43, 43, 43, 0.1);
  position: relative;
`;

export const observeCSS = css`
  height: 1px;
`;

export const positionContainer = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 1rem 0 2.1875rem;
`;

export const positionTitleSkeleton = css`
  width: 8.5rem;
  overflow: hidden;
  height: 2.25rem;
  border-radius: 2rem;
  text-indent: -9999px;
  position: relative;
  font-size: 0.75rem;
`;

export const cardContainer = css`
  width: calc(100% - 12rem);
  position: relative;
`;
