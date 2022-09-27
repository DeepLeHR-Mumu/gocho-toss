import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cardSkeleton = css`
  width: 100%;
  height: 22rem;
  overflow: hidden;
  position: relative;
`;

export const cardWrapper = css`
  width: 100%;
  height: 22rem;
`;

interface slideInfoDef {
  (backgroundColor: string): SerializedStyles;
}

export const slideInfo: slideInfoDef = (bgColor) => {
  return css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 22rem;
    background: linear-gradient(${bgColor}, ${bgColor}33);
    padding: 3rem;
  `;
};

export const endTime = css`
  color: ${COLORS.GRAY10};
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const companyName = css`
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${COLORS.GRAY10};
  font-size: 1.25rem;
  margin-bottom: 1.75rem;
`;

export const jdTitle = css`
  font-size: 1.5rem;
  color: ${COLORS.GRAY10};
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
  margin-bottom: 2.5rem;
`;
