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
  height: 22rem;
`;

export const slideInfo = (bgColor: string) => {
  return css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 22rem;
    background: linear-gradient(${bgColor}, ${bgColor}33);
    padding: 3rem;
    gap: 1rem 0;
    ${shorten()};
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
  color: ${COLORS.GRAY10};
  margin-bottom: 1rem;
`;

export const companyName = css`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25;
  color: ${COLORS.GRAY10};
  ${shorten(2)};
`;

export const jdTitle = css`
  font-size: 1.5rem;
  color: ${COLORS.GRAY10};
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
  ${shorten(2)};
`;
