import { css } from "@emotion/react";

import { TABLET } from "shared-style/mediaQuery";
import { skeletonCreatorCSS } from "@style/common";
import { COLORS } from "shared-style/color";

export const tipDisplayWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const tipFadeContainer = css`
  position: relative;
  width: 100%;
  max-width: 35rem;

  ${TABLET} {
    max-width: 50%;
  }
`;

export const tipImageBox = css`
  overflow: hidden;
  border-radius: 20rem;
`;

export const fadeImageCSS = css`
  height: 18rem;
  background-color: ${COLORS.GRAY90};
  font-size: 2rem;
  position: relative;

  ${TABLET} {
    height: 15rem;
  }
`;

export const currentTipContainer = css`
  width: 100%;
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const tagArrCSS = css`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  > li {
    font-size: 1.125rem;
    color: ${COLORS.GRAY30};
    margin-right: 1rem;
    white-space: nowrap;
    ${skeletonCreatorCSS("4rem")}

    :last-of-type {
      margin-right: 0;
    }
  }
`;

export const currentTipTitle = css`
  font-size: 1.75rem;
  word-break: keep-all;
  line-height: 1.5;
  margin-bottom: 1.8125rem;
  width: 100%;

  > span {
    margin-bottom: 10px;
    ${skeletonCreatorCSS()}

    :last-of-type {
      ${skeletonCreatorCSS("80%")}
    }
  }
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
