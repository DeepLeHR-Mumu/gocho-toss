import { css } from "@emotion/react";

import { skeletonCreatorCSS } from "shared-style/common";
import { COLORS } from "shared-style/color";

export const tipDisplayWrapper = css`
  display: flex;
  align-items: center;
`;

export const tipFadeContainer = css`
  margin-right: 1.5rem;
`;

export const tipImageBox = css`
  width: 38.9375rem;
  height: 21.0625rem;
  border-radius: 20rem;
  overflow: hidden;
  position: relative;
`;

export const currentTipContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const tagArrCSS = css`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;

  > li {
    font-size: 1rem;
    color: ${COLORS.GRAY30};
    margin-right: 1rem;
    font-weight: 400;
    white-space: nowrap;
    ${skeletonCreatorCSS("4rem")}

    :last-of-type {
      margin-right: 0;
    }
  }
`;

export const currentTipTitle = css`
  font-size: 1.625rem;
  word-break: keep-all;
  line-height: 1.6;
  margin-bottom: 2rem;
  ${skeletonCreatorCSS()}
`;

export const currentTipDesc = css`
  font-size: 1rem;
  line-height: 1.6;
  width: 100%;
  margin-bottom: 1rem;
  ${skeletonCreatorCSS()}
`;

export const detailButton = css`
  font-size: 1rem;
  background-color: ${COLORS.GRAY90};
  display: flex;
  line-height: 2;
  align-items: center;
  text-indent: -9999px;
  min-width: 7.375rem;
  justify-content: center;
  padding: 0.5rem 1.25rem;
`;
