import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const jobAdCardSkeleton = css`
  overflow: hidden;
  height: 15rem;
  border-radius: 1.5rem 1.5rem 0 0;
  margin: 0.5rem;
`;

export const cardWrapper = (isMobile: boolean) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${isMobile ? "100%" : "calc(100% - 1rem)"};
  border-radius: 1.5rem 1.5rem 0 0;
  padding: 1rem;
  background-color: #f2f4f7;
`;

export const buttonBox = css`
  display: block;
`;

export const colorLine = (colorCode: string, isMobile: boolean) => css`
  height: 0.8rem;
  width: ${isMobile ? "100%" : "calc(100% - 1rem)"};
  background-image: linear-gradient(to right, ${colorCode}, ${COLORS.BLUE_FIRST40});
`;

export const mainContainer = css`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const companyLogoWrapper = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GRAY100};
  width: 8.5rem;
  height: 8.5rem;
  padding: 0.5rem;
  border-radius: 1.5rem;
`;

export const companyLogoBox = css`
  width: 7.5rem;
  height: 7.5rem;
  position: relative;
  > img {
    object-fit: contain;
  }
`;

export const infoContainer = css`
  margin-left: 0.5rem;
  width: 100%;
`;

export const companyName = css`
  width: fit-content;
  display: block;
  color: ${COLORS.GRAY10};
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${COLORS.GRAY100};
  border-radius: 1.5rem;
  padding: 0.25rem 1rem;
  line-height: 1.6;
  ${shorten(2)}
`;

export const date = css`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  position: absolute;
  bottom: 0;
  right: 0.5rem;
`;

export const titleCSS = css`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  line-height: 1.6;
  height: 3.35rem;
  ${shorten(2)};
  text-align: left;
`;
