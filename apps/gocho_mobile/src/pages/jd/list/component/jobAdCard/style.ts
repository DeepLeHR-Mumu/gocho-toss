import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const cardSkeleton = css`
  width: 100%;
  height: 22rem;
  overflow: hidden;
  position: relative;
`;

export const cardWrapper = css`
  width: 100%;
`;

export const buttonBox = css`
  display: block;
`;

export const slideInfo = (bgColor: string) => {
  return css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 22rem;
    background-image: linear-gradient(180deg, ${COLORS.BLUE_FIRST40} 10%, ${bgColor} 90%);
    padding: 2rem;
    gap: 1rem 0;
  `;
};

export const companyLogoWrapper = css`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GRAY100};
  width: 6.5rem;
  height: 6.5rem;
  padding: 0.5rem;
  border-radius: 1.5rem;
`;

export const companyLogoBox = css`
  width: 5.5rem;
  height: 5.5rem;
  position: relative;
`;

export const endTime = css`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.GRAY100};
`;

export const companyName = css`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.GRAY100};
  ${shorten(1)};
`;

export const jdTitle = css`
  font-size: 1.5rem;
  display: block;
  color: ${COLORS.GRAY100};
  font-weight: 600;
  line-height: 1.6;
  word-break: keep-all;
  ${shorten(2)};
`;
