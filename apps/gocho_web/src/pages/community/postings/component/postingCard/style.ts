import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const cardContainer = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: left;
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

export const titleCSS = css`
  font-size: 1rem;
  font-weight: 500;
  display: block;
  width: 80%;
  color: ${COLORS.GRAY10};
  line-height: 2;
  margin-bottom: 0.5rem;
  ${shorten()};
`;

export const bodyCSS = css`
  width: 80%;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY30};
  margin-bottom: 1.125rem;
  line-height: 1.6;
  word-break: break-all;
  ${shorten(2)}
`;

export const infoContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const infoBox = css`
  display: flex;
  align-items: center;
  list-style: disc;
  margin-left: 1.125rem;
`;

export const info = css`
  margin: 0 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY40};
`;

export const numInfo = css`
  margin: 0 1rem;
  color: ${COLORS.GRAY40};
  font-size: 0.875rem;
  font-weight: 400;
  list-style: disc;
`;

export const writerProfile = css`
  display: flex;
  align-items: center;
`;

export const writerProfileImage = css`
  position: relative;
  z-index: 10;
  margin-right: -1.75rem;
`;

export const writerNickname = css`
  display: flex;
  align-items: center;
  width: 8.5rem;
  height: 2rem;
  font-size: 0.75rem;
  color: ${COLORS.GRAY10};
  background-color: ${COLORS.GRAY90};
  padding: 0.5rem 0.5rem 0.5rem 2.25rem;
  border-radius: 1rem;
  ${shorten()}
`;

export const postingCardSkeleton = css`
  overflow: hidden;
  width: 100%;
  border-radius: 2rem;
  height: 10.9375rem;
  margin-bottom: 1rem;
`;
